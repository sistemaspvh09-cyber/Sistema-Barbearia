<?php

namespace App\Services\Integrations;

use App\Models\Barbershop;
use App\Models\Charge;
use App\Models\InfinitePayConnection;
use App\Models\User;
use Illuminate\Http\Client\Factory as HttpFactory;
use Illuminate\Validation\ValidationException;

class InfinitePayCheckoutService
{
    public function __construct(
        protected HttpFactory $http,
    ) {
    }

    public function configure(Barbershop $barbershop, ?User $user, array $attributes): InfinitePayConnection
    {
        $connection = InfinitePayConnection::query()->firstOrNew([
            'barbershop_id' => $barbershop->id,
        ]);

        $connection->fill([
            'created_by_user_id' => $user?->id,
            'handle' => $attributes['handle'],
            'redirect_url' => $attributes['redirect_url'] ?? null,
            'webhook_url' => $attributes['webhook_url'] ?? null,
            'is_active' => $attributes['is_active'] ?? true,
            'last_checked_at' => null,
        ]);
        $connection->save();

        return $connection->refresh();
    }

    public function createCheckoutLink(Charge $charge): array
    {
        $charge->loadMissing(['customer', 'items', 'barbershop']);

        $connection = InfinitePayConnection::query()
            ->where('barbershop_id', $charge->barbershop_id)
            ->where('is_active', true)
            ->first();

        if (! $connection) {
            throw ValidationException::withMessages([
                'infinitepay' => 'Nenhuma configuracao InfinitePay ativa encontrada para esta barbearia.',
            ]);
        }

        $items = $charge->items->map(fn ($item) => [
            'quantity' => max(1, (int) $item->quantity),
            'price' => (int) $item->unit_price_cents,
            'description' => $item->description,
        ])->values()->all();

        if ($items === []) {
            $items = [[
                'quantity' => 1,
                'price' => (int) $charge->total_cents,
                'description' => 'Servico BarberPro',
            ]];
        }

        $payload = array_filter([
            'handle' => $connection->handle,
            'itens' => $items,
            'order_nsu' => (string) $charge->id,
            'redirect_url' => $connection->redirect_url ?: config('services.infinitepay.redirect_url'),
            'webhook_url' => $connection->webhook_url ?: config('services.infinitepay.webhook_url'),
            'customer' => $charge->customer ? array_filter([
                'name' => $charge->customer->name,
                'email' => $charge->customer->email,
                'phone_number' => $this->normalizePhone($charge->customer->phone),
            ]) : null,
        ], fn ($value) => $value !== null && $value !== '');

        $response = $this->http
            ->acceptJson()
            ->post('https://api.infinitepay.io/invoices/public/checkout/links', $payload)
            ->throw()
            ->json();

        $charge->forceFill([
            'gateway' => 'infinitepay',
            'gateway_reference' => $response['slug']
                ?? $response['invoice_slug']
                ?? data_get($response, 'data.slug')
                ?? data_get($response, 'data.invoice_slug')
                ?? $charge->gateway_reference,
            'metadata' => array_merge($charge->metadata ?? [], [
                'infinitepay' => $response,
                'order_nsu' => (string) $charge->id,
            ]),
        ])->save();

        $connection->forceFill([
            'last_checked_at' => now(),
        ])->save();

        return $response;
    }

    public function checkPaymentStatus(Charge $charge): array
    {
        $connection = InfinitePayConnection::query()
            ->where('barbershop_id', $charge->barbershop_id)
            ->where('is_active', true)
            ->first();

        if (! $connection) {
            throw ValidationException::withMessages([
                'infinitepay' => 'InfinitePay nao configurado para esta barbearia.',
            ]);
        }

        $providerData = $charge->metadata['infinitepay'] ?? [];
        $payload = array_filter([
            'handle' => $connection->handle,
            'order_nsu' => (string) $charge->id,
            'transaction_nsu' => $providerData['transaction_nsu'] ?? null,
            'slug' => $charge->gateway_reference ?? $providerData['slug'] ?? $providerData['invoice_slug'] ?? null,
        ], fn ($value) => $value !== null && $value !== '');

        $response = $this->http
            ->acceptJson()
            ->post('https://api.infinitepay.io/invoices/public/checkout/payment_check', $payload)
            ->throw()
            ->json();

        $paid = (bool) ($response['paid'] ?? false);

        $charge->forceFill([
            'status' => $paid ? 'paid' : $charge->status,
            'payment_method' => $response['capture_method'] ?? $charge->payment_method,
            'paid_at' => $paid ? now() : $charge->paid_at,
            'metadata' => array_merge($charge->metadata ?? [], [
                'infinitepay_status' => $response,
            ]),
        ])->save();

        return $response;
    }

    public function handleWebhook(array $payload): ?Charge
    {
        $orderNsu = $payload['order_nsu'] ?? null;

        if (! $orderNsu || ! ctype_digit((string) $orderNsu)) {
            return null;
        }

        $charge = Charge::query()->find((int) $orderNsu);

        if (! $charge) {
            return null;
        }

        $charge->forceFill([
            'gateway' => 'infinitepay',
            'gateway_reference' => $payload['invoice_slug'] ?? $charge->gateway_reference,
            'status' => 'paid',
            'payment_method' => $payload['capture_method'] ?? $charge->payment_method,
            'paid_at' => now(),
            'metadata' => array_merge($charge->metadata ?? [], [
                'infinitepay' => array_merge($charge->metadata['infinitepay'] ?? [], $payload),
            ]),
        ])->save();

        return $charge;
    }

    protected function normalizePhone(?string $phone): ?string
    {
        if (! $phone) {
            return null;
        }

        $digits = preg_replace('/\D+/', '', $phone);

        if (! $digits) {
            return null;
        }

        if (! str_starts_with($digits, '55')) {
            $digits = '55'.$digits;
        }

        return '+'.$digits;
    }
}
