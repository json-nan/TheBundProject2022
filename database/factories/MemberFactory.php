<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Member>
 */
class MemberFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'slug' => $this->faker->slug,
            'logo_image' => $this->faker->imageUrl(),
            'profile_image' => $this->faker->imageUrl(720, 1034),
            'external_portfolio_url' => $this->faker->url,
            'local_portfolio_url' => $this->faker->url,
            'description' => $this->faker->sentence,
        ];
    }
}
