import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import Axios from 'axios';

const PokemonDetail = props => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    Axios.get(props.pokemon.url).then(res => setDetails(res.data));
  }, [props.pokemon.url]);

  return (
    <div style={detailStyle}>
      <h1>{props.pokemon.name} </h1>
      <div>
        <p>
          <span>Height: </span>
          {details?.height}
        </p>
        <p>
          <span>Weight: </span>
          {details.weight}
        </p>
        <p>
          <span>Weight: </span>
          {details.baseExperiance}
        </p>
      </div>
    </div>
  );
};

const detailStyle = {
  width: '300px',
  height: '200px',
  border: 'solid black 5px',
  borderRadius: '9px',
  backgroundColor: 'ivory',
  textAlign: 'center',
  margin: '10px',
};

export default PokemonDetail;
