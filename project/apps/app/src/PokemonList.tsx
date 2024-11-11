import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemons } from './store/pokemonSlice';
import { fetchPokemons } from './api';
import { List } from "ui";

const PokemonList = () => {
    const dispatch = useDispatch();
    const { pokemons } = useSelector(({ pokemon }: any) => ({
        pokemons: pokemon.pokemons,
    }));

    const pokemonList = useMemo(() => [...pokemons], [pokemons]);

    const fetchPokemonsLists = async () => {
        try {
            const pokemonList = await fetchPokemons();
            dispatch(setPokemons(pokemonList));
        }
        catch (errors) {
            console.log(errors);
        }
    }

    useEffect(() => {
        fetchPokemonsLists();
    }, []);

    return <List pokemons={pokemonList} />
}

export default PokemonList;