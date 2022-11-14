<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EmblematicMember>
 */
class EmblematicMemberFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'member_since' => $this->faker->date(),
            'profile_image' => $this->faker->imageUrl(),
            'logo' => $this->faker->imageUrl(),
            'description' => $this->faker->text(),
            'internal_portfolio' => $this->faker->url(),
            'external_portfolio' => $this->faker->url(),
        ];
    }
}
