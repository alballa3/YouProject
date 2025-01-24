<?php

use App\Http\Controllers\authController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::controller(authController::class)->group(function () {
    Route::get("auth/register", "regiserPage")->middleware("guest");
    Route::post("auth/register", "regiser")->middleware("guest");
    Route::get("auth/login", "loginPage")->middleware("guest");
    Route::post("auth/logout", "logout")->middleware("auth");
    Route::post("auth/login", "login")->middleware("guest");
});

Route::controller(ProductController::class)->group(function () {
    Route::get("products", "index");
    Route::get("product/{product}", "show");
});

Route::get("/", function () {
    return Inertia::render("home");
});
