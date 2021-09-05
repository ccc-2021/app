<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Review;
use App\Models\Schedule;
use Illuminate\Database\Eloquent\Factories\Sequence;
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
        $users = User::all();
        $schedules = Schedule::all();

        $schedules->each(function ($schedule) use ($users) {
            Review::factory()
                ->count(5)
                ->state(new Sequence(
                    fn() => [
                        'user_id' => $users->random()->id,
                        'schedule_id' => $schedule->id,
                    ],
                ))
                ->create();
        });
    }
}
