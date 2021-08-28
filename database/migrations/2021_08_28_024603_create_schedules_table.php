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

            $table->foreignId('user_id')
                ->index()
                ->comment('作成者')
                ->constrained('users');

            $table->foreignId('schedule_id')
                ->comment('フォーク元スケジュール')
                ->constrained();

            $table->text('content')
                ->comment('スケジュール内容');

            $table->datetime('start_at')
                ->comment('スケジュール開始日時');
            $table->datetime('end_at')
                ->comment('スケジュール終了日時');

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
        Schema::dropIfExists('schedules');
    }
}
