import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import Axios from 'axios';

const PokemonListItem = props => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    Axios.get(props.pokemon.url).then(res => setDetails(res.data));
  }, [props.pokemon.url]);

  // let image = '';
  // if (details.sprites === undefined) {
  //   image = <div>loading...</div>;
  // } else {
  //   image = <img src={details.sprites.front_default} alt='' />;
  // }

  return (
    <Link className='card' to={`/pokemons/${props.index}`}>
      <div className='card-sprite'>
        {/* {image} */}
        <img src={details.sprites?.front_shiny} alt='' />
      </div>
      <div className='card-name'>{props.pokemon.name}</div>
      <p className='card-height'>
        <span>height: </span>
        {details.height}
      </p>
      <p className='card-weight'>
        <span>weight: </span>
        {details.weight}
      </p>
    </Link>
  );
};

export default PokemonListItem;
