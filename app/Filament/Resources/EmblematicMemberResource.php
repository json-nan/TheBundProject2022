<?php

namespace App\Filament\Resources;

use App\Filament\Resources\EmblematicMemberResource\Pages;
use App\Filament\Resources\EmblematicMemberResource\RelationManagers;
use App\Filament\Resources\EmblematicMemberResource\RelationManagers\SocialNetworksRelationManager;
use App\Models\EmblematicMember;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class EmblematicMemberResource extends Resource
{
    protected static ?string $model = EmblematicMember::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(191),
                Forms\Components\TextInput::make('email')
                    ->email()
                    ->maxLength(191),
                Forms\Components\DatePicker::make('member_since'),
                Forms\Components\TextInput::make('profile_image')
                    ->maxLength(191),
                Forms\Components\FileUpload::make('logo')
                    ->required()
                    ->disablePreview(),
                Forms\Components\FileUpload::make('internal_portfolio')
                    ->disablePreview(),
                Forms\Components\TextInput::make('external_portfolio')
                    ->maxLength(191),
                Forms\Components\Textarea::make('description')
                    ->maxLength(65535)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name'),
                Tables\Columns\TextColumn::make('email'),
                Tables\Columns\TextColumn::make('member_since')
                    ->date(),
                Tables\Columns\TextColumn::make('profile_image'),
                Tables\Columns\TextColumn::make('logo'),
                Tables\Columns\TextColumn::make('description'),
                Tables\Columns\TextColumn::make('internal_portfolio'),
                Tables\Columns\TextColumn::make('external_portfolio'),
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
            SocialNetworksRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListEmblematicMembers::route('/'),
            'create' => Pages\CreateEmblematicMember::route('/create'),
            'edit' => Pages\EditEmblematicMember::route('/{record}/edit'),
        ];
    }
}
