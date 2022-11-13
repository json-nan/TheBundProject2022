<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Generation>
 */
class GenerationFactory extends Factory
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
            'year' => $this->faker->year,
            'description' => $this->faker->sentence,
            'background_color' => $this->faker->hexColor,
            'background_color_opacity' => $this->faker->numberBetween(1, 100),
            'banner_image' => $this->faker->imageUrl(),
            'logo_image' => $this->faker->imageUrl(),
            'background_image' => $this->faker->imageUrl(),
            'home_page_generation' => $this->faker->boolean,
        ];
    }
}
