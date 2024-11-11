import React from 'react'

interface ListProps { pokemons: { name: string }[]; }

export const List: React.FC<ListProps> = ({ pokemons }) => {
  //task-2
  return (
    <div>
      {pokemons.map((pokemon, index) => (
        <li key={index}>
          {pokemon.name}
        </li>
      ))}
    </div>
  );
};