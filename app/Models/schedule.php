<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;

class schedule extends Model
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $fillable = [
        'content',
        'user_id',
        'fork_user_id',
    ];

    protected $hidden = [
    ];

    protected $casts = [
        
    ];
}
