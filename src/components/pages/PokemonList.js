import React from 'react';
import PokemonListItem from '../PokemonListItem';

const PokemonList = props => {
  const result = props.pokemonlist.map((pokemon, index) => (
    <PokemonListItem pokemon={pokemon} index={index} />
  ));
  return result;
};

export default PokemonList;
