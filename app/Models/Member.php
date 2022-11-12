<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class Member extends Model
{
    use HasFactory;

    protected $fillable = [
        'generation_id',
        'name',
        'slug',
        'logo_image',
        'profile_image',
        'external_portfolio_url',
        'local_portfolio_url',
        'description',
        'is_emblematic',
    ];

    public function generation()
    {
        return $this->belongsTo(Generation::class);
    }

    public function socialNetworks()
    {
        return $this->belongsToMany(SocialNetwork::class)
            ->withPivot('url');
    }
}
