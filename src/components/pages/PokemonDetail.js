import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Axios from 'axios';

export class PokemonDetail extends Component {
  state = {
    details: {},
  };

  componentDidMount() {
    const url = this.props.pokemon.url;
    console.log(url);
    Axios.get(url).then(res => this.setState({ details: res.data }));
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>{this.props.pokemon.name} </h1>
        <div>{JSON.stringify(this.state.details['abilities'])}</div>
      </div>
    );
  }
}

// PokemonListItem.propTypes = {
//   pokemon: PropTypes.object.isRequired,
// };

export default PokemonDetail;
