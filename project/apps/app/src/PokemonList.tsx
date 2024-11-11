import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemons, removePokemon } from './store/pokemonSlice';
import { fetchPokemons } from './api';
import { List } from 'ui';

const PokemonList = () => {
    const dispatch = useDispatch();
    const { pokemons } = useSelector(({ pokemon }: any) => pokemon);

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

    const deletePokemon = (name: string) => {
        dispatch(removePokemon(name))
    }

    return <List pokemons={pokemons} removePokemon={(name: string) => deletePokemon(name)} />
}

export default PokemonList;