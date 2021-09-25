<?php

namespace Database\Seeders;

use App\Models\Genre;
use App\Models\Schedule;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * @throws Exception
     */
    public function run(): void
    {
        $genres = collect([
            $this->createGenre('趣味', '趣味に関するスケジュール'),
            $this->createGenre('習い事', '習い事に関するスケジュール'),
            $this->createGenre('部活', '部活に関するスケジュール'),
            $this->createGenre('仕事', '仕事に関するスケジュール'),
            $this->createGenre('バイト', 'バイトに関するスケジュール'),
            $this->createGenre('勉強', '勉強に関するスケジュール'),
            $this->createGenre('学校', '学校に関するスケジュール'),
        ]);

        if (!App::environment('production')) {
            Schedule::all()->each(function ($schedule) use ($genres) {
                $schedule->genres()->sync(
                    $genres->random(random_int(0, $genres->count()))
                        ->take(1)
                        ->pluck('id')
                        ->toArray(),
                );
            });

        }
    }

    public function createGenre(string $name, string $detail): Model|Collection
    {
        return Genre::factory()
            ->create(compact('name', 'detail'));
    }
}
