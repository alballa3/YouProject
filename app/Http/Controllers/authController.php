<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use function Illuminate\Log\log;

class authController extends Controller
{
    //
    public function regiserPage(Request $request)
    {
        return Inertia::render("auth/register");
    }
    public function loginPage(Request $request)
    {
        return Inertia::render("auth/login");
    }
    public function regiser(Request $request)
    {
        $request->validate([
            "email" => "required|email|unique:users",
            "password" => "required|min:8",
            "name" => "required"
        ]);
        $user = User::create($request->all());
        Auth::login($user);
        return redirect("/");
    }
    public function login(Request $request) {
        $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);
        if (Auth::attempt($request->only("email", "password"))) {
            return redirect("/");
        }
        return redirect()->back()->withErrors([
            "email" => "Invalid credentials"
        ]);
    }
    public function logout()
    {
        Auth::logout();
        return redirect("/");
    }
}
