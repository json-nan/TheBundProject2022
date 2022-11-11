<?php

namespace App\Filament\Resources\SocialNetworkResource\Pages;

use App\Filament\Resources\SocialNetworkResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSocialNetwork extends EditRecord
{
    protected static string $resource = SocialNetworkResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
