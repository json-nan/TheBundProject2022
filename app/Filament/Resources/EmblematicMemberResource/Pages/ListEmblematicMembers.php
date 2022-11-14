<?php

namespace App\Filament\Resources\EmblematicMemberResource\Pages;

use App\Filament\Resources\EmblematicMemberResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListEmblematicMembers extends ListRecords
{
    protected static string $resource = EmblematicMemberResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
