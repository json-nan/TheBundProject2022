<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectSocialNetwork extends Model
{
    use HasFactory;

    protected $fillable = [
        'social_network_id',
        'url',
    ];

    public function socialNetwork()
    {
        return $this->belongsTo(SocialNetwork::class);
    }
}
