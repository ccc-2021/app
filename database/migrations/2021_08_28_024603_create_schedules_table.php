<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->Biginteger('created_user_id')->unsigned();
            $table->Biginteger('fork_user_id')->nullable();//これあってる？
            $table->biginteger('genre_id')->unsigned();
            $table->string('content');
            $table->timestamp('start_at');
            $table->timestamp('end_at')->nullable();
            $table->timestamps();

            //外部キー設定 create_user_id
            $table->foreign('created_user_id')->references('id')->on('users');
            //外部キー設定 fork_user_id
            // $table->foreign('fork_user_id')->references('id')->on('users');
            //外部キー設定 genre_id
            $table->foreign('genre_id')->references('id')->on('genres');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedules');
    }
}
