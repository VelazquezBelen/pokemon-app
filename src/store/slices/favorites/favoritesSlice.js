import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
        isLoading: false,
    },
    reducers: {
        startLoadingFavorites: (state ) => {
            state.isLoading = true;
        },
        getFavorites: (state) => {
            const favorites = JSON.parse(localStorage.getItem('favorites'));
            if (favorites !== null)
                state.favorites = favorites;
            state.isLoading = false;
        },
        onChangeFavorite: (state, action) => {
            const pokemon = state.favorites.filter( p => p.id === action.payload.id);
            if (pokemon.length > 0) {
                state.favorites = state.favorites.filter( pokemon => pokemon.id !== action.payload.id);
                state.favorites.sort((a, b) => a.id - b.id);
            } else {
                state.favorites = [...state.favorites, action.payload]
                state.favorites.sort((a, b) => a.id - b.id);
            }
        },
        saveFavorites: (state) => {
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingFavorites, onChangeFavorite, getFavorites, saveFavorites, isFavorite } = favoritesSlice.actions;