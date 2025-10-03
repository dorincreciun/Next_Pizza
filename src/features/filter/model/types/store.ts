export type FilterType = {
    flags?: FilterFlag[];
    ingredients?: FilterIngredient[];
    dough?: FilterSingleChoice[];
}

export type FilterSelectedType = {
    flagIds: string[];
    ingredientsIds: string[];
    doughId: string | null;
}

export type FilterStore = {
    filters: FilterType;
    selected: FilterSelectedType;

    setFilters: (filters: FilterType) => void;

    toggleFlag: (id: string) => void;
    toggleIngredient: (id: string) => void;
    toggleDough: (id: string) => void;
}