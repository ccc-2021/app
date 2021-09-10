<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(): void
    {

        if (!App::environment('production')) {
            $this->call(UserSeeder::class);
            $this->call(ReviewSeeder::class);
        }

        $this->call(GenreSeeder::class);
    }
}
