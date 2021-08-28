<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * App\Models\Genre
 *
 * @property int $id
 * @property string $name ジャンル名
 * @property string $detail ジャンル説明
 */
class Genre extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'detail',
    ];

    public $timestamps = false;

    /**
     * Return the schedule for this genre.
     *
     * @return BelongsToMany
     */
    public function schedules(): BelongsToMany
    {
        return $this->belongsToMany(Schedule::class);
    }
}
