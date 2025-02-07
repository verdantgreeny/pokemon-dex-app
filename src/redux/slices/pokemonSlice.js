import { createSlice } from "@reduxjs/toolkit";

const selectedList = JSON.parse(localStorage.getItem("selectedPokemon"))
const initialState = selectedList || [];

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      return [...state, action.payload];
    },
    deletePokemon: (state, action) => {
      return [...state].filter((pokemon) => pokemon.id !== action.payload.id);
    },
  },
});

export const { addPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
