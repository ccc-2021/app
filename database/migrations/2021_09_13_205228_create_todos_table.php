<?php

use App\Models\Todo;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTodosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todos', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')
                ->index()
                ->comment('作成者')
                ->constrained('users')
                ->onDelete('cascade');

            $table->foreignId('character_id')
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('set null');

            $table->date('period_day')
                ->nullable()
                ->comment('期限日');

            $table->boolean('is_repetition')
                ->default(false)
                ->comment('繰り返すか');

            $table->string('title', 256)
                ->comment('タイトル');

            $table->text('content')
                ->nullable()
                ->comment('本文');

            $table->integer('status')
                ->default(Todo::DEFAULT)
                ->comment('ステータス');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('todos');
    }
}
