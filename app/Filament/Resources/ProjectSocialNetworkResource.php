<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectSocialNetworkResource\Pages;
use App\Filament\Resources\ProjectSocialNetworkResource\RelationManagers;
use App\Models\ProjectSocialNetwork;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProjectSocialNetworkResource extends Resource
{
    protected static ?string $model = ProjectSocialNetwork::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('social_network_id')
                    ->relationship('socialNetwork', 'name')
                    ->required(),
                Forms\Components\TextInput::make('url')
                    ->required()
                    ->maxLength(191),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('social_network_id'),
                Tables\Columns\TextColumn::make('url'),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProjectSocialNetworks::route('/'),
            'create' => Pages\CreateProjectSocialNetwork::route('/create'),
            'edit' => Pages\EditProjectSocialNetwork::route('/{record}/edit'),
        ];
    }
}
