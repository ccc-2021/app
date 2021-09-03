<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\Review;
use App\Models\Schedule;
use Exception;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $comments = ['使えなかった','あまり使えなかった','普通','結構使えた','かなり使えた'];
        $i = 1;
        foreach ($comments as $comment) {
            Review::create([
                    'user_id' => $i,
                    'schedule_id' => $i,
                    'rate' => $i,
                    'comment' => $comment
                ]);
            $i = $i +1;
        }
        
    }
}