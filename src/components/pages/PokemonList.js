import React from 'react';
import PokemonListItem from '../PokemonListItem';
import PropTypes from 'prop-types';

const PokemonList = props => {
  const result = props.pokemonlist.map((pokemon, index) => (
    <PokemonListItem pokemon={pokemon} index={index} />
  ));
  return result;
};

PokemonList.propTypes = {
  pokemonlist: PropTypes.array.isRequired,
};

export default PokemonList;
