<?php

namespace Database\Seeders;

use App\Models\product;
use App\Models\reviews;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        product::factory(70)->create();
        User::factory(10)->create();
        reviews::create([
            "user_id" => 1,
            "product_id" => 1,
            "rating" => "2 stars",
            "text" => "You Can BE BETTEr"
        ]);
    }
}
