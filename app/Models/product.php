<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;
    protected $casts = [
        'features' => 'array', // Cast features to array
        'image' => 'array', // Cast images to array,
        'sizes' => 'array', // Cast sizes to array,
    ];
    protected $fillable = [
        'name', // Add 'name' to the fillable array
        'description', // Add other attributes as needed
        'price',
        'features',
        'sizes',
        "published",
        "image"
    ];
}
