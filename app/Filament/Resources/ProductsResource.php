<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductsResource\Pages;
use App\Filament\Resources\ProductsResource\RelationManagers;
use App\Filament\Resources\ProductsResource\RelationManagers\ReviewsRelationManager;
use App\Models\product;
use Filament\Tables\Actions\Action;
use Filament\Forms;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\CheckboxList;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Tabs\Tab;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\Tabs;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\ToggleColumn;

class ProductsResource extends Resource
{
    protected static ?string $model = product::class;

    protected static ?string $navigationIcon = "heroicon-o-rectangle-stack";
    protected function mutateFormDataBeforeSave(array $data): array
    {
        if (isset($data["features"]) && is_array($data["features"])) {
            $data["features"] = json_encode($data["features"]);
        }

        // Encode 'image' as JSON (if multiple images are uploaded)
        if (isset($data["image"]) && is_array($data["image"])) {
            $data["image"] = json_encode($data["image"]);
        }
        return $data;
    }
    public static function form(Form $form): Form
    {
        return $form->schema([
            //
            Tabs::make('Product Details')
            ->tabs([
                Tab::make('General Information')
                    ->icon('heroicon-o-information-circle')
                    ->schema([
                        TextInput::make('name')
                            ->label('Product Name')
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true)
                            ->autofocus()
                            ->suffixIcon('heroicon-o-pencil')
                            ->placeholder('Enter product name (e.g., Classic Hoodie)')
                            ->columnSpanFull(),

                        Textarea::make('description')
                            ->label('Product Description')
                            ->required()
                            ->maxLength(1000)
                            ->placeholder('Provide a detailed product description...')
                            ->columnSpanFull(),

                        TextInput::make('price')
                            ->label('Product Price')
                            ->required()
                            ->numeric()
                            ->minValue(0)
                            ->prefix('AED')
                            ->suffixIcon('heroicon-o-currency-dollar')
                            ->placeholder('0.00'),

                        TagsInput::make('features')
                            ->label('Product Features')
                            ->placeholder('Add feature and press Enter')
                            ->required()
                            ->columnSpanFull(),

                        Checkbox::make('published')
                            ->label('Make product visible in store')
                            ->default(false)
                            ->inline(),
                    ]),

                Tab::make('Product Information')
                    ->icon('heroicon-o-cog')
                    ->schema([
                        Select::make('sizes')
                            ->label('Available Sizes')
                            ->options([
                                'XS' => 'Extra Small (XS)',
                                'S' => 'Small (S)',
                                'M' => 'Medium (M)',
                                'L' => 'Large (L)',
                                'XL' => 'Extra Large (XL)',
                            ])
                            ->multiple()
                            ->required()
                            ->searchable()
                            ->preload()
                            ->native(false)
                            ->columnSpanFull(),

                        FileUpload::make('image')
                            ->label('Product Images')
                            ->image()
                            ->multiple()
                            ->maxFiles(5)
                            ->imageEditor()
                            ->imagePreviewHeight('250')
                            ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp'])
                            ->helperText('Upload up to 5 images (JPEG, PNG, or WebP)')
                            ->columnSpanFull(),
                    ]),
            ])
            ->columnSpanFull()
            ->persistTabInQueryString(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make("image")
                    ->circular()
                    ->label("Product Image")
                    ->getStateUsing(function ($record): mixed {
                        return $record->image;
                    }),
                TextColumn::make("name")
                    ->label("Product Name")
                    ->description(
                        fn($record): mixed => strlen($record->description) > 50
                            ? substr($record->description, 0, 35) . "..."
                            : $record->description
                    ),
                TextColumn::make("price")
                    ->label("Product Price")
                    ->money("AED"),
                TextColumn::make("created_at")->label("Created At")->dateTime()->sortable(),
                ToggleColumn::make("published"),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
                Action::make('view')
                    ->label('View')
                    ->color('primary')
                    ->url(fn(product $record) => route('product.show', $record->id))
                    ->icon('heroicon-s-eye')
                    ->openUrlInNewTab(true),
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
            ReviewsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            "index" => Pages\ListProducts::route("/"),
            "create" => Pages\CreateProducts::route("/create"),
            "edit" => Pages\EditProducts::route("/{record}/edit"),
        ];
    }
}
