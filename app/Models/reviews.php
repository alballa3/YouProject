<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class reviews extends Model
{
    /** @use HasFactory<\Database\Factories\ReviewsFactory> */
    use HasFactory;
    protected $fillable = [
        "user_id",
        "product_id",
        "rating",
        "text",
    ];
    public function user() :BelongsTo{
        return $this->belongsTo(User::class);
    }
    public function products() : BelongsTo{
        return $this->belongsTo(product::class);
    }
}
