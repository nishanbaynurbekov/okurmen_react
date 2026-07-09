// src/redux/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteBooks: [] // Тандалган китептер ушул жерге жыйналат
  },
  reducers: {
    addToFavorites: (state, action) => {
      // Книга мурда кошулбаганын текшеребиз
      const exists = state.favoriteBooks.find(book => book.id === action.payload.id);
      if (!exists) {
        state.favoriteBooks.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favoriteBooks = state.favoriteBooks.filter(book => book.id !== action.payload);
    }
  }
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;