import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class PokemonListItem extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Link to={`/pokemons/${this.props.index}`}>
          {this.props.pokemon.name}
        </Link>
      </div>
    );
  }
}

PokemonListItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonListItem;
