<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AnimalController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CocheController;

Route::get('animales', [AnimalController::class, 'index']);

Route::get('/', function () {
    return view('welcome');
});

Route::post('/test', function () {
    return response()->json(['message' => 'Funciona']);
})->withoutMiddleware([\App\Http\Middleware\VerifyCsrfToken::class]);

Route::get('/events-ui', function () {
    return view('events');
});

Route::resource('products', ProductController::class);

Route::get('/products', [ProductController::class, 'index']);

Route::get('/coche', [CocheController::class, 'index']);