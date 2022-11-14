<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmblematicMember extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'member_since',
        'profile_image',
        'logo',
        'description',
        'internal_portfolio',
        'external_portfolio',
    ];

    public function socialNetworks()
    {
        return $this->belongsToMany(SocialNetwork::class)
            ->withPivot('url');
    }
}
