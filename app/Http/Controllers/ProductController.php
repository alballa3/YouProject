<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreproductRequest;
use App\Http\Requests\UpdateproductRequest;
use App\Models\product;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() {
        return Inertia::render("products/page");
        //
    }

    

    /**
     * Display the specified resource.
     */
    public function show(product $product)
    {
        //
        return Inertia::render("products/all");
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(product $product)
    {
        //
    }
}
