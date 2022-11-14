<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialNetwork extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'icon',
    ];

    public function members()
    {
        return $this->belongsToMany(Member::class)
            ->withPivot('url');
    }

    public function emblematicMembers()
    {
        return $this->belongsToMany(EmblematicMember::class)
            ->withPivot('url');
    }
}
