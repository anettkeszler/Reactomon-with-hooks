import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import PokemonList from './components/pages/PokemonList';
import TypeList from './components/pages/TypeList';
import PokemonDetail from './components/pages/PokemonDetail';

import Axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    pokemonlist: [],
    typelist: [],
  };

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    Axios.get('https://pokeapi.co/api/v2/pokemon').then(res =>
      this.setState({ pokemonlist: res.data.results })
    );
    Axios.get('https://pokeapi.co/api/v2/type').then(res =>
      this.setState({ typelist: res.data.results })
    );
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <div className='container'>
            <Navbar />
            <Route
              exact
              path={['/pokemons', '/']}
              render={props => (
                <React.Fragment>
                  <PokemonList pokemonlist={this.state.pokemonlist} />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path='/types'
              render={props => (
                <React.Fragment>
                  <TypeList typelist={this.state.typelist} />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path='/pokemons/:id'
              render={props => {
                console.log(props);
                console.log(props.location);
                const selectedIndex = props.match.params['id'];
                const selectedPokemon = this.state.pokemonlist[selectedIndex];

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
  }
}

export default App;
