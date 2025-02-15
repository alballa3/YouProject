<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\reviews>
 */
class ReviewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            "user_id"=> $this->faker->numberBetween(1,20),
            "product_id"=>$this->faker->numberBetween(1,60),
            "rating"=>$this->faker->numberBetween(3,5),
            "text"=> $this->faker->sentence,
        ];
    }
}
