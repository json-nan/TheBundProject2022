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
        Schema::create('emblematic_members', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('email')->nullable();
            $table->date('member_since')->nullable();
            $table->string('profile_image')->nullable();
            $table->string('logo')->nullable();
            $table->text('description')->nullable();
            $table->string('internal_portfolio')->nullable();
            $table->string('external_portfolio')->nullable();


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
        Schema::dropIfExists('emblematic_members');
    }
};
