<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;
    protected $fillable = [
        'name', // Add 'name' to the fillable array
        'description', // Add other attributes as needed
        'price',
        'color', // Example: If you have a color field
        'features',
        'sizes',
    ];
}
