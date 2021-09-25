<?php

namespace Database\Factories;

use App\Models\Character;
use App\Models\Todo;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class TodoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Todo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {

        $characters = Character::virus()->get()->count();

        return [
            'user_id' => User::factory(),
            'period_day' => $this->faker->dateTimeThisYear(),
            'is_repetition' => false,
            'title' => $this->faker->sentence(),
            'content' => $this->faker->paragraph(),
            'status' => Todo::DEFAULT,
        ];
    }
}
