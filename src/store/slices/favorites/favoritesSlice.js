import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
    },
    reducers: {
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
    }
});


// Action creators are generated for each case reducer function
export const { onChangeFavorite } = favoritesSlice.actions;