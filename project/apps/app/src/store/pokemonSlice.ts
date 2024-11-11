import { createSlice } from '@reduxjs/toolkit';
import { IPokemonState } from '../interface/pokemons.interface';

const initialState: IPokemonState = {
    pokemons: [],
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemons(state, action) {
            state.pokemons = action.payload;
        },
        removePokemon(state, action) {
            state.pokemons = state.pokemons.filter((pokemon) => pokemon.name !== action.payload);
        },
    },
});

export const { setPokemons, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;