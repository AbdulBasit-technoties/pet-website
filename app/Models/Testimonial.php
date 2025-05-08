<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;
    protected $fillable = [
        'comment',
        'name',
        'country_id',
        'image',
        'rating',
    ];
    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id');
    }
}
