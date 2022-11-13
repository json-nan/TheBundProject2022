<?php

namespace Database\Seeders;

use App\Models\Generation;
use App\Models\Member;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GenerationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Generation::factory()
            ->has(Member::factory()->count(10))
            ->count(4)
            ->create();
    }
}
