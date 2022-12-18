import React from 'react';
import PropTypes from 'prop-types';

import './App.css';
import pokemon from './pokemon.json';

const ListLength = 10;

const PokemonRow = ({ pokemon, onSelect })=>(
    <tr>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(', ')}</td>
        <td><button onClick={()=>onSelect(pokemon)}>Select</button></td>
    </tr>
)

PokemonRow.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.shape({
            english: PropTypes.string.isRequired,
        }),
        type: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    onSelect: PropTypes.func.isRequired,
};

const PokemonInfo = ({name, base}) => (
    <div>
        <h1 style={{
            fontSize:'larger',
            padding:'14px 0',
            margin:0,
        }}>{name.english}</h1>
        <table>
            <tbody>
            {
                Object.keys(base).map(key=>(
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{base[key]}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
)

PokemonInfo.propTypes = {
    name: PropTypes.shape({
        english: PropTypes.string.isRequired,
    }),
    base: PropTypes.shape({
        HP: PropTypes.number.isRequired,
        Attack: PropTypes.number.isRequired,
        Defense: PropTypes.number.isRequired,
        "Sp. Attack": PropTypes.number.isRequired,
        "Sp. Defense": PropTypes.number.isRequired,
        Speed: PropTypes.number.isRequired
    }),
}

function App() {
    const [filter, filterSet] = React.useState("");
    const [selectedItem, selectedItemSet] = React.useState(null);
  return (
      <div
          style={{
              width:520,
              textAlign:'center',
              margin:'auto',
          }}
      >
          <h1 className="h1">Pokemon Search</h1>
          <input value={filter} onChange={(evt) => filterSet(evt.target.value)} />
          <div
              style={{
                  width:'100%',
                  display:'grid',
                  gridTemplateColumns: "70% 30%",
                  gridColumnGap:5,
              }}
          >
              <div>
                  <table>
                      <thead>
                      <tr>
                          <th>Name</th>
                          <th colSpan='2'>Type</th>
                      </tr>
                      </thead>
                      <tbody>
                      {pokemon.filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase())).slice(0,ListLength).map((pokemon)=>(
                          <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={(pokemon)=>selectedItemSet(pokemon)} />
                      ))}
                      </tbody>
                  </table>
              </div>
              {selectedItem && <PokemonInfo {...selectedItem} />}
          </div>
      </div>
  );
}

export default App;
