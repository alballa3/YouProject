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
        // product::factory(70)->create();
        // User::factory(21)->create();
        reviews::factory(125)->create();
    }
}
