<?php

use App\Http\Controllers\authController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReviewsController;
use App\Models\product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::controller(authController::class)->group(function () {
    Route::get("auth/register", "regiserPage")->middleware("guest");
    Route::post("auth/register", "regiser")->middleware("guest");
    Route::get("auth/login", "loginPage")->middleware("guest")->name("login");
    Route::post("auth/logout", "logout")->middleware("auth");
    Route::post("auth/login", "login")->middleware("guest");
});

Route::controller(ProductController::class)->group(function () {
    Route::get("products", "index");
    Route::get("product/least", "leastproduct");
    Route::get("product/{id}", "show")->name('product.show');
});


Route::controller(ReviewsController::class)->group(function () {
    Route::post("product/{id}","post")->name("product.review")->middleware("auth");
    Route::post("/contact","contact");
});


Route::controller(OrderController::class)->group(function () {
   Route::get("/checkout","index")->middleware("auth"); 
   Route::put("/product/{id}","store")->middleware("auth");
});

Route::get("/", function () {
    return Inertia::render("index");
});
