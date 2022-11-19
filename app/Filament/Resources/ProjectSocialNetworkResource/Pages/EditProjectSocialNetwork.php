<?php

namespace App\Filament\Resources\ProjectSocialNetworkResource\Pages;

use App\Filament\Resources\ProjectSocialNetworkResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditProjectSocialNetwork extends EditRecord
{
    protected static string $resource = ProjectSocialNetworkResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
