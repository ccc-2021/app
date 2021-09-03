<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            
            $table->foreignId('user_id')
                ->index()
                ->comment('レビュー者')
                ->constrained('users')
                ->onDelete('cascade');

            $table->foreignId('schedule_id')
                ->comment('コメント先スケジュール')
                ->constrained('schedules')
                ->onDelete('cascade');
            
            $table->integer('rate')
                ->comment('評価');
            

            $table->string('comment')
                ->comment('コメント');

            $table->timestamps();
            $table->softDeletes();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reviews');
    }
}
