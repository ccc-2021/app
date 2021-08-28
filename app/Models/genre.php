<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;

class genre extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

        protected $fillable = [
            'name',
            'detail',
        ];

        protected $casts = [
        
        ];
}
