<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * App\Models\Review
 * 
 * @property int $id
 * @property int $user_id レビュー者
 * @property int $schedule_id コメント先スケジュール
 * @property int $rate 評価
 * @property string $comment コメント
 *  */

class Review extends Model
{
    use HasFactory;
    protected $fillable =[
        'user_id',
        'schedule_id',
        'rate',
        'comment',
    ];
}
