<?php

namespace App\Http\Controllers;

use App\Models\reviews;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewsController extends Controller
{
    //

    public function post(string $id,Request $request)
    {
        if (! Auth::check()) {
            return redirect()->back()->withErrors(['error' => 'The user must be authenticated to post a review']);
        }
      
        $request->validate([
            "text" => ["required", "max:150"],
        ]);
       
        $user = Auth::user();
        reviews::create(
            ["user_id" => $user->id, "product_id" => $id,"text" => $request->text, "rating" => $request->rating]
        ); 
        return redirect()->back()->with("success","Review Posted Successfully");
    }
}
