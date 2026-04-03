<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Api\V1\Concerns\ResolvesBarbershop;
use App\Http\Controllers\Controller;
use App\Services\Integrations\InfinitePayCheckoutService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class InfinitePayConfigController extends Controller
{
    use ResolvesBarbershop;

    public function __construct(
        protected InfinitePayCheckoutService $service,
    ) {
    }

    public function store(Request $request): JsonResponse
    {
        $payload = $request->validate([
            'handle' => ['required', 'string'],
            'redirect_url' => ['nullable', 'url'],
            'webhook_url' => ['nullable', 'url'],
            'is_active' => ['nullable', 'boolean'],
            'barbershop_id' => ['nullable', 'integer'],
            'barbershop_slug' => ['nullable', 'string'],
        ]);

        $barbershop = $this->resolveBarbershop($request);
        $connection = $this->service->configure($barbershop, $request->user(), $payload);

        return response()->json([
            'barbershop' => $this->barbershopPayload($barbershop),
            'connection' => [
                'handle' => $connection->handle,
                'redirect_url' => $connection->redirect_url,
                'webhook_url' => $connection->webhook_url,
                'is_active' => $connection->is_active,
                'last_checked_at' => optional($connection->last_checked_at)->toISOString(),
            ],
        ]);
    }
}
