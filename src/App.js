import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import PokemonList from './components/pages/PokemonList';
import TypeList from './components/pages/TypeList';
import PokemonDetail from './components/pages/PokemonDetail';

import Axios from 'axios';

import './App.css';

const App = props => {
  const [pokemonlist, setPokemonList] = useState([]);
  const [typelist, setTypeList] = useState([]);

  useEffect(() => {
    Axios.get('https://pokeapi.co/api/v2/pokemon').then(res =>
      setPokemonList(res.data.results)
    );
    Axios.get('https://pokeapi.co/api/v2/type').then(res =>
      setTypeList({ typelist: res.data.results })
    );
  }, []);

  let content = (
    <BrowserRouter>
      <div className='App'>
        <div className='container'>
          <Navbar />
          <Route
            exact
            path={['/pokemons', '/']}
            render={props => (
              <React.Fragment>
                <div className='card-container'>
                  <PokemonList pokemonlist={pokemonlist} />
                </div>
              </React.Fragment>
            )}
          />
          <Route
            exact
            path='/types'
            render={props => (
              <React.Fragment>
                <TypeList typelist={typelist.typelist} />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path='/pokemons/:id'
            render={props => {
              const selectedIndex = props.match.params['id'];
              const selectedPokemon = pokemonlist[selectedIndex];
              return (
                <React.Fragment>
                  <PokemonDetail pokemon={selectedPokemon} />
                </React.Fragment>
              );
            }}
          />
        </div>
      </div>
    </BrowserRouter>
  );
  return content;
};

export default App;
