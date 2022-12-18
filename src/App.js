import React from 'react';
import PropTypes from 'prop-types';

import './App.css';
import pokemon from './pokemon.json';

const ListLength = 10;

const PokemonRow = ({ pokemon })=>(
    <tr>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(', ')}</td>
    </tr>
)

PokemonRow.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.shape({
            english: PropTypes.string,
        }),
        type: PropTypes.arrayOf(PropTypes.string),
    })
}


function App() {
  return (
      <div
          style={{
              width:414,
              textAlign:'center',
              margin:'auto',
          }}
      >
          <h1 className="h1">Pokemon Search</h1>
          <table>
              <thead>
              <tr>
                  <th>Name</th>
                  <th>Type</th>
              </tr>
              </thead>
              <tbody>
              {pokemon.slice(0,ListLength).map((pokemon)=>(
                  <PokemonRow pokemon={pokemon} key={pokemon.id} />
              ))}
              </tbody>
          </table>
      </div>
  );
}

export default App;
