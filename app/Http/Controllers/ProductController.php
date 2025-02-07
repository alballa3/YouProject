<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreproductRequest;
use App\Http\Requests\UpdateproductRequest;
use App\Models\product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $products = Product::query()
            ->where("published", true)
            ->withAvg("reviews", "rating")
            ->limit(8)->get();

        return Inertia::render("products/all", ["product" => $products]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
        $product = product::query()
            ->where("id", $request->id)
            ->where("published", true)
            ->with("reviews")
            ->with("reviews.user")
            ->first();
        if (!$product) {
            return Inertia::render("error/404");
        }
        $product["totalReviews"] = $product->getTotallReviews();
        $product["argReviews"] = $product->getAvarageReviews();
        return Inertia::render("products/page", [
            "product" => $product,
        ]);
    }

    public function leastproduct()
    {
        $product = product::query()
            ->where("published", true)
            ->orderBy("price", "asc")
            ->withAvg("reviews", "rating")
            ->limit(4)
            ->get();

        return response()->json($product);
    }
}
