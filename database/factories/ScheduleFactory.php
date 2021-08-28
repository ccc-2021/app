<?php

namespace Database\Factories;

use App\Models\Schedule;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ScheduleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Schedule::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'schedule_id' => null,
            'title' => $this->faker->sentence,
            'content' => $this->faker->paragraphs(3, true),
            'start_at' => $this->faker->dateTimeThisMonth,
            'end_at' => $this->faker->dateTimeThisMonth,
        ];
    }
}
