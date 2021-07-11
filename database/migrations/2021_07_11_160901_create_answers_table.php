<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('answers', function (Blueprint $table) {
            $table->id();
            $table->string( 'version' );
            $table->string('name');
            $table->string( 'question_id' );
            $table->string( 'question_name' );
            $table->string( 'question_title' );
            $table->string( 'question_type' );
            $table->string( 'question_answer', 4000 );
            $table->boolean( 'final' );
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
        Schema::dropIfExists('answers');
    }
}
