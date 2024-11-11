import React from 'react';
import './list.css';

interface ListProps { pokemons: { name: string }[]; }

export const List: React.FC<ListProps> = ({ pokemons }) => {
  //task-2
  return (
    <div className='list'>
      {pokemons.map((pokemon, index) => (
        <li key={index}>
          {pokemon.name}
        </li>
      ))}
    </div>
  );
};