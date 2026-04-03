<?php

return [
    'paths' => [
        'api/*',
        'api/v1/*',
        'up',
    ],

    'allowed_methods' => ['*'],

    'allowed_origins' => array_values(array_filter([
        env('FRONTEND_URL'),
        'http://localhost:3000',
        'http://localhost:4173',
        'http://localhost:5173',
        'http://127.0.0.1:3000',
        'http://127.0.0.1:4173',
        'http://127.0.0.1:5173',
    ])),

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,
];
