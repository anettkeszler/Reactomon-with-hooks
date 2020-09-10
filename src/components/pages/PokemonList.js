import React from 'react';
import PokemonListItem from '../PokemonListItem';
import PropTypes from 'prop-types';

class PokemonList extends React.Component {
  constructor(props) {
    super(props);
    console.log('PokemonList page created...');
  }

  render() {
    console.log(this.props.pokemonlist);

    return this.props.pokemonlist.map((pokemon, index) => (
      <PokemonListItem pokemon={pokemon} index={index} />
    ));
  }
}

PokemonList.propTypes = {
  pokemonlist: PropTypes.array.isRequired,
};

export default PokemonList;
