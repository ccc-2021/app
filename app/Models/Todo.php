<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * App\Models\Todo
 *
 * @property int $id
 * @property int $user_id 作成者
 * @property string|null $period_day 期限日
 * @property int $is_repetition 繰り返すか
 * @property string $title タイトル
 * @property string $content 本文
 * @property int $status ステータス
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property mixed $character_id キャラクターID
 */
class Todo extends Model
{
    use HasFactory;

    protected $with = [
        'character'
    ];

    protected $fillable = [
        'user_id',
        'period_day',
        'is_repetition',
        'title',
        'content',
        'status',
        'character_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'period_day' => 'datetime',
        'is_repetition' => 'boolean'
    ];

    protected $appends = [
        'monster_image',
        'monster_name',
    ];

    public const DEFAULT = 1;
    public const DONE = 2;

    public function scopeToday($query): void
    {
        $query->whereDate('created_at', today());
    }

    public function getMonsterImageAttribute(): string
    {
        return asset('img/' . $this->character->image_photo_path);
    }

    public function getMonsterNameAttribute(): string
    {
        return $this->character->name ?? 'ウイルス' . $this->character->id;
    }

    /**
     * @return BelongsTo
     */
    public function character(): BelongsTo
    {
        return $this->belongsTo(Character::class);
    }
}
