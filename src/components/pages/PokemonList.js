import React from 'react';
import PokemonListItem from '../PokemonListItem';

const PokemonList = props => {
  const result = props.pokemonlist.map((pokemon, index) => (
    <div>
      <PokemonListItem pokemon={pokemon} index={index} />
    </div>
  ));
  return result;
};

export default PokemonList;
