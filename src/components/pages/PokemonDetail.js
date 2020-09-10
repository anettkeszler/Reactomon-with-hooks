import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import Axios from 'axios';

const PokemonDetail = props => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    Axios.get(props.pokemon.url).then(res => setDetails(res.data));
  }, [props.pokemon.url]);

  console.log(props);
  console.log(details);
  return (
    <div>
      <h1>{props.pokemon.name} </h1>
      <div>{details?.height}</div>
    </div>
  );
};

export default PokemonDetail;
