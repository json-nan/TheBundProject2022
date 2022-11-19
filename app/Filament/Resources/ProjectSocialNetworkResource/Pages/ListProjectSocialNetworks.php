<?php

namespace App\Filament\Resources\ProjectSocialNetworkResource\Pages;

use App\Filament\Resources\ProjectSocialNetworkResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListProjectSocialNetworks extends ListRecords
{
    protected static string $resource = ProjectSocialNetworkResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
