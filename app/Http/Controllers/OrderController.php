<?php

namespace App\Http\Controllers;

use App\Models\order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{
    //
    public function index()
    {
        return Inertia::render("products/checkout");
    }
    public function store($id, Request $request)
    {
        $request->validate([
            "price" => ["required", "numeric"],
            "size" => ["required"]
        ]);
        $order=order::create([
            "product_id" => $id,
            "user_id"=>Auth::user()->id,
            "price" => $request->price,
            "size"=>$request->size
        ]);

    }
}
