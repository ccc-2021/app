<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

/**
 * App\Models\Schedule
 *
 * @property int $id
 * @property int $user_id 作成者
 * @property int $schedule_id フォーク元スケジュール
 * @property string $content スケジュール内容
 * @property string $start_at スケジュール開始日時
 * @property string $end_at スケジュール終了日時
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 * @property string $title スケジュールタイトル
 * @property-read Collection|Genre[] $genres
 * @property-read int|null $genres_count
 * @property-read int $rate_avg
 * @property-read Collection|Review[] $reviews
 * @property-read int|null $reviews_count
 * @property-read User $user
 */
class Schedule extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $with = [
      'reviews',
    ];

    protected $fillable = [
        'user_id',
        'schedule_id',
        'content',
        'start_at',
        'end_at',
        'title',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'start_at'  => 'datetime',
        'end_at'    => 'datetime',
    ];

    protected $appends = [
      'rate_avg',
    ];

    /**
     * Return the rate average
     * @return int
     */
    public function getRateAvgAttribute(): int
    {
        return $this->reviews?->avg('rate') ?? 0;
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Return the genre for this schedule.
     *
     * @return BelongsToMany
     */
    public function genres(): BelongsToMany
    {
        return $this->belongsToMany(Genre::class);
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }
}
