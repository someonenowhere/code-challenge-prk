import React from 'react';
import { Lists, ListItems, ListItemButton } from '../styles';

interface ListProps { pokemons: { name: string }[]; removePokemon: (name: string) => void; }

export const List: React.FC<ListProps> = ({ pokemons, removePokemon }) => {
  //task-2
  return (
    <Lists>
      {pokemons.map((pokemon, index) => (
        <ListItems key={index}>
          {pokemon.name}
          <ListItemButton onClick={() => removePokemon(pokemon.name)}>Remove</ListItemButton>
        </ListItems>
      ))}
    </Lists>
  );
};