<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\product>
 */
class productFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $feature = [
            "This Hoodie is the best.",
            "Clean and modern design.",
            "Made from high-quality materials.",
            "Soft and comfortable to wear.",
            "Available in multiple colors.",
            "Perfect for casual outings.",
            "Durable and long-lasting.",
            "Breathable fabric for all seasons.",
            "Stylish and trendy look.",
            "Eco-friendly and sustainable production.",
            "Easy to wash and maintain.",
            "Great fit for all body types.",
            "Affordable and value for money.",
            "Perfect gift for friends and family.",
            "Designed for maximum comfort.",
        ];
        $sizes = ["XS", "S", "M", "L", "XL"];
        $images = [
            "https://images.unsplash.com/photo-1517298257259-f72ccd2db392?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9kZGllfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1638993029979-2fd6e7867660?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9kZGllfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
            "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        ];
        $name = $this->faker->name;
        shuffle($feature);
        shuffle($sizes);
        shuffle($images);
        return [
            "name" => $name,
            "description" => $this->faker->paragraph(3),
            "features" => array_slice($feature, 0, 3), // Get the first 3 shuffled features
            "published" => true,
            "sizes" => array_slice($sizes, 0, 3), // Get the first 3 shuffled sizes
            "price" => $this->faker->numberBetween(10, 70) ,
            "image" => array_slice($images, 0, 3), // Get the first 3 shuffled images
        ];
    }
}
