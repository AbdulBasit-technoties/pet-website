<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('testimonials', function (Blueprint $table) {
            $table->id();
            $table->text('comment'); // For long comments
            $table->string('name');
            $table->unsignedBigInteger('country_id'); // Foreign key column
            $table->foreign('country_id')->references('id')->on('countries')->onDelete('cascade');
            $table->string('image')->nullable(); // Optional image
            $table->enum('rating', [1, 2, 3, 4, 5]); // Enum for ratings 1 to 5
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
        Schema::dropIfExists('testimonials');
    }
};
