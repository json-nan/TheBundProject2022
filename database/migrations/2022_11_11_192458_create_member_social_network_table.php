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
        Schema::create('member_social_network', function (Blueprint $table) {
            $table->foreignId('member_id')->constrained();
            $table->foreignId('social_network_id')->constrained();
            $table->string('url');

            $table->primary(['member_id', 'social_network_id']);
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
        Schema::dropIfExists('member_social_network');
    }
};
