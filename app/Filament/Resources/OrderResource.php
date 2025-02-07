<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OrderResource\Pages;
use App\Filament\Resources\OrderResource\RelationManagers;
use App\Models\order;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;
class OrderResource extends Resource
{
    protected static ?string $model = order::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('user.name')
                ->label('Customer')  // More user-friendly label
                ->sortable()
                ->searchable()  // Enable search
                ->description(fn ($record) => $record->user->email) // Show additional info
                ->badge(),  
            
            TextColumn::make('product.name')
                ->label('Product')
                ->sortable()
                ->searchable()
                ->description(fn ($record) => Str::limit($record->product->description, 30))
                ->icon('heroicon-s-shopping-bag'),
            
            TextColumn::make('status')
                ->badge()
                ->color(fn (string $state): string => match ($state) {
                    'pending' => 'warning',
                    'processing' => 'primary',
                    'shipped' => 'success',
                    'cancelled' => 'danger',
                    default => 'gray',
                })
                ->icon(fn (string $state): string => match ($state) {
                    'pending' => 'heroicon-o-clock',
                    'processing' => 'heroicon-o-arrow-path',
                    'shipped' => 'heroicon-o-check-circle',
                    'cancelled' => 'heroicon-o-x-circle',
                    default => 'heroicon-o-question-mark-circle',
                })
                ->sortable()
                ->alignCenter(),
            
            TextColumn::make('size')
                ->formatStateUsing(fn (string $state): string => strtoupper($state))
                ->badge()
                ->color('gray')
                ->alignCenter(),
            
            TextColumn::make('price')
                ->money('EUR')  // Automatic currency formatting
                ->sortable()
                ->alignEnd()
                ->color(fn ($record) => $record->price > 100 ? 'success' : 'primary')
                ->weight('bold'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
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
            'index' => Pages\ListOrders::route('/'),
            'create' => Pages\CreateOrder::route('/create'),
            'edit' => Pages\EditOrder::route('/{record}/edit'),
        ];
    }
}
