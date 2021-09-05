<?php

namespace Database\Factories;

use App\Models\Review;
use App\Models\Schedule;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReviewFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Review::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $comments = [
            '使えなかった', 'あまり使えなかった', '普通', '結構使えた', 'かなり使えた',
        ];

        return [
            'user_id' => User::factory(),
            'schedule_id' => Schedule::factory(),
            'rate' => $this->faker->numberBetween(1, 5),
            'comment' => $this->faker->randomElement($comments),
        ];
    }
}
