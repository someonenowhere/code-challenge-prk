import { useEffect, useState } from 'react';
import { fetchPokemons } from './api';
import { List } from "ui";

interface ListProps { pokemons: { name: string }[]; }

const PokemonList = () => {
    const [pokemons, setPokemons] = useState<ListProps[]>([]);

    const fetchPokemonsLists = async () => {
        try {
            const pokemonList = await fetchPokemons();
            setPokemons(pokemonList);
        }
        catch (errors) {
            console.log(errors);
        }
    }

    useEffect(() => {
        fetchPokemonsLists();
    }, []);

    return <List pokemons={pokemons} />
}

export default PokemonList;