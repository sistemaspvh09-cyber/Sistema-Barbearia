<?php

use App\Http\Controllers\Api\V1\AgendaController;
use App\Http\Controllers\Api\V1\CustomersController;
use App\Http\Controllers\Api\V1\DashboardController;
use App\Http\Controllers\Api\V1\FinanceController;
use App\Http\Controllers\Api\V1\GoogleCalendarController;
use App\Http\Controllers\Api\V1\InfinitePayCheckoutController;
use App\Http\Controllers\Api\V1\InfinitePayConfigController;
use App\Http\Controllers\Api\V1\InfinitePayWebhookController;
use App\Http\Controllers\Api\V1\IntegrationsStatusController;
use App\Http\Controllers\Api\V1\ServicesController;
use App\Http\Controllers\Api\V1\StatusController;
use App\Http\Controllers\Api\V1\Auth\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/health', [StatusController::class, 'health'])->name('health');
Route::get('/meta', [StatusController::class, 'meta'])->name('meta');

Route::prefix('auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login'])->name('auth.login');

    Route::middleware(['auth:sanctum'])->group(function () {
        Route::get('/me', [AuthController::class, 'me'])->name('auth.me');
        Route::post('/logout', [AuthController::class, 'logout'])->name('auth.logout');
        Route::post('/switch-barbershop', [AuthController::class, 'switchBarbershop'])->name('auth.switch');
        Route::post('/invite', [AuthController::class, 'invite'])
            ->middleware(['barbershop.context', 'barbershop.role:owner,admin'])
            ->name('auth.invite');
    });
});

Route::get('/dashboard', DashboardController::class)->name('dashboard');
Route::get('/agenda', AgendaController::class)->name('agenda.index');
Route::get('/services', ServicesController::class)->name('services.index');
Route::get('/customers', CustomersController::class)->name('customers.index');
Route::get('/finance', FinanceController::class)->name('finance.index');
Route::get('/integrations/status', IntegrationsStatusController::class)->name('integrations.status');

Route::prefix('integrations/google')->group(function () {
    Route::get('/authorize', [GoogleCalendarController::class, 'authorize'])
        ->middleware(['auth:sanctum', 'barbershop.context', 'barbershop.role:owner,admin'])
        ->name('integrations.google.authorize');
    Route::get('/callback', [GoogleCalendarController::class, 'callback'])
        ->name('integrations.google.callback');
    Route::post('/appointments/{appointment}/event', [GoogleCalendarController::class, 'createEvent'])
        ->middleware(['auth:sanctum', 'barbershop.context', 'barbershop.role:owner,admin,reception,barber'])
        ->name('integrations.google.appointments.event');
});

Route::prefix('integrations/infinitepay')->group(function () {
    Route::post('/config', [InfinitePayConfigController::class, 'store'])
        ->middleware(['auth:sanctum', 'barbershop.context', 'barbershop.role:owner,admin'])
        ->name('infinitepay.config');
    Route::post('/charges/{charge}/checkout-link', [InfinitePayCheckoutController::class, 'createLink'])
        ->middleware(['auth:sanctum', 'barbershop.context', 'barbershop.role:owner,admin,reception,barber'])
        ->name('infinitepay.checkout-link');
    Route::post('/charges/{charge}/payment-check', [InfinitePayCheckoutController::class, 'paymentCheck'])
        ->middleware(['auth:sanctum', 'barbershop.context', 'barbershop.role:owner,admin,reception,barber'])
        ->name('infinitepay.payment-check');
    Route::post('/webhook', [InfinitePayWebhookController::class, 'handle'])->name('infinitepay.webhook');
});
