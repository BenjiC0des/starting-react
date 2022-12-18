import React from 'react';
import PropTypes from 'prop-types';

import './App.css';
import pokemon from './pokemon.json';

//variable & constants
const listLength = 10;

//components
const PokemonRow = ({pokemon})=>(
    <tr>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(', ')}</td>
    </tr>
)

//Property Types
PokemonRow.propTypes = ({
    pokemon: PropTypes.shape({
        name: PropTypes.shape({
            english: PropTypes.string,
        }),
        type: PropTypes.arrayOf(PropTypes.string),
    })
})

function App() {
    const [filter, filterSet] = React.useState('');
  return (
      <div style={{
          width:'100%',
          maxWidth:520,
          margin:'auto'
      }}>
          <h1 className='h1'>Pokémon Search</h1>
          <input value={filter} onChange={(evt)=>filterSet(evt.target.value)}/>
          <table>
              <thead>
              <tr>
                  <th>Name</th>
                  <th>Type</th>
              </tr>
              </thead>
              <tbody>
              {pokemon
                  .filter((pokemon)=>pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
                  .slice(0,listLength).map((pokemon)=>(
                  <PokemonRow pokemon={pokemon} key={pokemon.id} />
              ))}
              </tbody>
          </table>
      </div>
  );
}

export default App;
