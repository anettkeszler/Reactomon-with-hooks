import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import Axios from 'axios';

const PokemonListItem = props => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    Axios.get(props.pokemon.url).then(res => setDetails(res.data));
  }, [props.pokemon.url]);

  return (
    <div className='card'>
      <div className='card-sprite'>
        <img src={details.sprites} alt='' />
      </div>
      <Link className='card-name' to={`/pokemons/${props.index}`}>
        {props.pokemon.name}
      </Link>
      <p className='card-height'>
        <span>height: </span>
        {details.height}
      </p>
      <p className='card-weight'>
        <span>weight: </span>
        {details.weight}
      </p>
    </div>
  );
};

export default PokemonListItem;
