<?php

namespace Database\Seeders;

use App\Models\Schedule;
use App\Models\Todo;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        User::factory()
            ->has(
                Todo::factory()->count(10)
            )
            ->create([
                'name' => 'Civictech 太郎',
                'email' => 'civictech@example.com',
                'password' => bcrypt('password'),
                'type' => User::ADMIN,
                'profile_photo_path' => 'https://unavatar.io/kai0310'
            ]);

        User::factory()
            ->count(10)
            ->has(
                Todo::factory()->count(10)
            )
            ->create();
    }
}
