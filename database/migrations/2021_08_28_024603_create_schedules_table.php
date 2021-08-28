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
            $table->foreignId('user_id')->constrained();//foreign使おうとしたところcreate_が邪魔だったため外しました
            $table->Biginteger('fork_user_id')->nullable();//
            $table->foreignId('genre_id')->constrained();
            $table->string('content');
            $table->datetime('start_at');
            $table->datetime('end_at')->nullable();
            $table->timestamps();
            //外部キー設定 create_user_id
            // $table->foreign('created_user_id')->references('id')->on('users');
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
