<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class Member extends Model
{
    use HasFactory;

    protected $fillable = [
        'portfolio_id',
        'name',
        'slug',
        'logo_image',
        'profile_image',
        'portfolio_url',
        'description',
    ];

    public function portfolio()
    {
        return $this->belongsTo(Portfolio::class);
    }
}
