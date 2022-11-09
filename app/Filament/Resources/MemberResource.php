<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MemberResource\Pages;
use App\Filament\Resources\MemberResource\RelationManagers;
use App\Models\Member;
use Closure;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;

class MemberResource extends Resource
{
    protected static ?string $model = Member::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('portfolio_id')
                    ->relationship('portfolio', 'name')
                    ->required(),
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255)
                    ->reactive()
                    ->afterStateUpdated(function (Closure $set, $state) {
                        $set('slug', Str::slug($state));
                    }),
                Forms\Components\TextInput::make('slug')
                    ->required()
                    ->maxLength(255),
                Forms\Components\FileUpload::make('logo_image')
                    ->required()
                    ->disablePreview(),
                Forms\Components\FileUpload::make('profile_image')
                    ->required()
                    ->disablePreview(),
                Forms\Components\Select::make('portfolio_type')
                    ->required()
                    ->options([
                        'external' => 'External',
                        'internal' => 'Internal',
                    ])
                    ->default('external')
                    ->reactive()
                    ->afterStateUpdated(function (Closure $set, $state) {
                        $set('portfolio_url', null);
                    }),
                Forms\Components\TextInput::make('portfolio_url')
                    ->maxLength(255)
                    ->required()
                    ->hidden(fn (Closure $get) => $get('portfolio_type') === 'internal'),
                Forms\Components\FileUpload::make('portfolio_url')
                    ->required()
                    ->hidden(fn (Closure $get) => $get('portfolio_type') === 'external')
                    ->disablePreview(),
                Forms\Components\Textarea::make('description')
                    ->required()
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('portfolio_id'),
                Tables\Columns\TextColumn::make('name'),
                Tables\Columns\TextColumn::make('slug'),
                Tables\Columns\TextColumn::make('description'),
                Tables\Columns\TextColumn::make('logo_image'),
                Tables\Columns\TextColumn::make('profile_image'),
                Tables\Columns\TextColumn::make('portfolio_url'),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime(),
                Tables\Columns\TextColumn::make('deleted_at')
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
            'index' => Pages\ListMembers::route('/'),
            'create' => Pages\CreateMember::route('/create'),
            'edit' => Pages\EditMember::route('/{record}/edit'),
        ];
    }
}
