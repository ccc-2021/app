<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @method static insert(array $character)
 */
class Character extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name',
        'image_photo_path',
        'description',
        'type',
        'message',
    ];

    public const TYPES = [
        'VIRUS' => 0,
        'RACCINE' => 1,
    ];

    public function scopeVirus($query): void
    {
        $query->where('type', self::TYPES['VIRUS']);
    }

    public function scopeRaccine($query): void
    {
        $query->where('type', self::TYPES['RACCINE']);
    }



    /**
     * @return HasMany
     */
    public function todos(): HasMany
    {
        return $this->hasMany(Todo::class);
    }
}
