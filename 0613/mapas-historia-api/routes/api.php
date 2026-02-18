<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ProductController;

Route::apiResource('events', EventController::class);
Route::apiResource('products', ProductController::class);


?>