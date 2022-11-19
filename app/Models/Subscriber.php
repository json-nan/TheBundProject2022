<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscriber extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'name',
        'reason',
        'occupation',
        'other_occupation',
    ];

    public function scopeOfContact($query, $contact)
    {
        return $query->where('email', $contact);
    }
}
