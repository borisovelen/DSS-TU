export interface Recipe{
    id:number;
    name:string;
    ingredients:string;
    instructions:string;
    cookingTime:number;
    publicationDate: Date;
}

export interface listProps{
    recipes: Recipe[];
    onSelectRecipe: (recipe:Recipe) => void;
    onRemoveRecipe: (recipe:Recipe) => void;
}

export interface detailsProps{
    selectedRecipe: Recipe;
    emptyRecipe: Recipe;
    onSave: (recipe: Recipe) => void;
    onUpdate: (recipe: Recipe) => void;
    clearForm: () => void;
}