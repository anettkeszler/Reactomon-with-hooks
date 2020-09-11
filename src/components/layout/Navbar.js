import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header style={navbarStyle}>
      <Link style={linkStyle} to='/pokemons'>
        Pokemons
      </Link>
      <Link style={linkStyle} to='/types'>
        Types
      </Link>
    </header>
  );
}
const navbarStyle = {
  height: '50px',
  background: 'red',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

const linkStyle = {
  backgroundColor: 'black',
  color: '#fff',
  marginTop: '0px',
  marginRight: '10px',
  textDecoration: 'none',
  padding: '5px',
  display: 'inline-block',
  borderRadius: '10px',
  width: '150px',
};

export default Navbar;
