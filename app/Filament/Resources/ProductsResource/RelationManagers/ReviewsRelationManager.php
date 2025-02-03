<?php

namespace App\Filament\Resources\ProductsResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ReviewsRelationManager extends RelationManager
{
    protected static string $relationship = 'reviews';
    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('text')
                    ->required()
                    ->maxLength(255),

            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('review')
            ->columns([
                TextColumn::make('text')
                ->label(__('Review'))  // Localization support
                ->limit(50)
                ->tooltip(fn ($record) => $record->text)  // Show full text on hover
                ,
            
            TextColumn::make('user.name')
                ->label(__('Username'))  // Localization support
                ,
            
            TextColumn::make('rating')
                ->label(__('Product Rating'))  // Localization support
                ->numeric(1),
                
            
            TextColumn::make('created_at')
                ->label(__('Created At'))  // Localization support
                ->dateTime('M d, Y H:i')  // Custom date format
                ->sortable()
                  // Default sorting by created_at in descending order
               
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
