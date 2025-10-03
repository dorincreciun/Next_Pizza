import {create, StateCreator} from "zustand";
import {FilterSelectedType, FilterStore, FilterType} from "../model/types/store";

const filters: FilterType = {
    flags: [],
    ingredients: [],
    dough: [],
}

const selected: FilterSelectedType = {
    flagIds: [],
    ingredientsIds: [],
    doughId: null,
}

const toggleFlagUpdater = (id: string) => (state: FilterStore): Pick<FilterStore, "selected"> => ({
    selected: {
        ...state.selected,
        flagIds: state?.selected?.flagIds?.includes(id)
            ? state.selected.flagIds.filter((flagId: string) => flagId !== id)
            : [...state.selected.flagIds, id],
    },
})

const toggleIngredientUpdater = (id: string) => (state: FilterStore): Pick<FilterStore, "selected"> => ({
    selected: {
        ...state.selected,
        ingredientsIds: state?.selected?.ingredientsIds?.includes(id)
            ? state.selected.ingredientsIds.filter((ingredientId: string) => ingredientId !== id)
            : [...state.selected.ingredientsIds, id],
    },
})

const toggleDoughUpdater = (id: string) => (state: FilterStore): Pick<FilterStore, "selected"> => ({
    selected: {
        ...state.selected,
        doughId: state?.selected?.doughId === id ? null : id,
    },
})

const filterStore: StateCreator<FilterStore> = (set) => {
    return {
        /* store */
        filters,
        selected,

        /* actions */
        setFilters: (filters) => set({filters}),

        toggleFlag: (id) => set(toggleFlagUpdater(id)),
        toggleDough: (id) => set(toggleDoughUpdater(id)),
        toggleIngredient: (id) => set(toggleIngredientUpdater(id)),
    }
}

export const useFilter = create<FilterStore>()(filterStore)
