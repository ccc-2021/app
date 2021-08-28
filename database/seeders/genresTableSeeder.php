<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;


class genresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //genres
        DB::table('genres')->insert([
            'name' => 'test',
            'detail' => 'サンプルテスト',
        ]);
    }
}
