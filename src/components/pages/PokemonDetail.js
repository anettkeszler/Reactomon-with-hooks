import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import Axios from 'axios';

const PokemonDetail = props => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    if (props.pokemon) {
      Axios.get(props.pokemon.url).then(res => setDetails(res.data));
    }
  });

  return (
    <div style={detailContainer}>
      <div style={detailContent}>
        <h1>{props.pokemon?.name} </h1>
        <div>
          <p>
            <span>Height: </span>
            {details.height}
          </p>
          <p>
            <span>Weight: </span>
            {details.weight}
          </p>
          <p>
            {/* if details.types not undefined or null or falsy, then  */}
            {details.types &&
              details.types.map(type => {
                return <span>{type.type.name}</span>;
              })}
          </p>
        </div>
      </div>
    </div>
  );
};

const detailContent = {
  width: '500px',
  height: '300px',
  border: 'solid black 5px',
  borderRadius: '9px',
  backgroundColor: 'ivory',
  textAlign: 'center',
  margin: 'auto',
  marginTop: '30px',
};

const detailContainer = {
  contentAlign: 'center',
};

export default PokemonDetail;
