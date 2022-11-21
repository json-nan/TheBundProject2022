<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Generation extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'banner_image',
        'logo_image',
        'year',
        'background_color',
        'background_color_opacity',
        'background_image',
        'home_page_generation',
        'phrase',
    ];

    public function members()
    {
        return $this->hasMany(Member::class);
    }

    public function scopeIsHomePageGeneration($query)
    {
        return $query->where('home_page_generation', true);
    }
}
