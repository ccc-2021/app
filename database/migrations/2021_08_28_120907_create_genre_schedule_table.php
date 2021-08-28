<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGenreScheduleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('genre_schedule', function (Blueprint $table) {
            $table->foreignId('genre_id')
                ->comment('ジャンル')
                ->constrained();

            $table->foreignId('schedule_id')
                ->comment('ジャンル')
                ->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('genre_schedule');
    }
}
