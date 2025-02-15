<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order extends Model
{
    /** @use HasFactory<\Database\Factories\OrderFactory> */
    use HasFactory;
    protected $fillable = [
        "product_id",
        "user_id",
        "price",
        "size",
        "status"
    ];
    public function product(){
        return $this->belongsTo(product::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
