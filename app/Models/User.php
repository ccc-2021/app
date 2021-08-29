<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property Carbon|null $email_verified_at
 * @property string $password
 * @property int $type
 * @property string|null $profile_photo_path
 * @property string|null $remember_token
 * @property Carbon|null $banned_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 */
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    public const DEFAULT = 1;
    public const ADMIN   = 2;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'type',
        'profile_photo_path',
        'banned_at',
        'type',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'banned_at'         => 'datetime',
    ];

    /**
     * Return the user type.
     *
     * @return int
     */
    public function type(): int
    {
        return (int) $this->type;
    }

    /**
     * Return the user is administrator or not
     *
     * @return bool
     */
    public function isAdmin(): bool
    {
        return $this->type() === self::ADMIN;
    }

    /**
     * Get the URL to the user's profile photo.
     *
     * @return string
     */
    public function getProfilePhotoUrlAttribute(): string
    {
        return $this->profile_photo_path ?: $this->defaultProfilePhotoUrl();
    }

    /**
     * Get the default profile photo URL if no profile photo has been uploaded.
     *
     * @return string
     */
    protected function defaultProfilePhotoUrl(): string
    {
        return 'https://ui-avatars.com/api/?name='.urlencode($this->name).'&color=7F9CF5&background=EBF4FF';
    }


    public function scopeToday($query): void
    {
        $query->whereDate('created_at', today());
    }

    /**
     * Return the user's schedule.
     *
     * @return HasMany
     */
    public function schedules(): HasMany
    {
        return $this->hasMany(Schedule::class);
    }


    /**
     * Return the user's schedule for today.
     *
     * @return HasMany
     */
    public function todaySchedules(): HasMany
    {
        return $this->schedules()->whereDate('created_at', today());
    }
}
