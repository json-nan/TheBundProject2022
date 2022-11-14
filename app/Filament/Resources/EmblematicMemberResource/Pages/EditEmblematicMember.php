<?php

namespace App\Filament\Resources\EmblematicMemberResource\Pages;

use App\Filament\Resources\EmblematicMemberResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditEmblematicMember extends EditRecord
{
    protected static string $resource = EmblematicMemberResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
