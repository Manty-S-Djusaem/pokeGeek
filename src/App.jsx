import { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import PokeButtons from './pokeButtons/pokeButtons';

const specificPokemons = [
  'bulbasaur',
  'venusaur',
  'butterfree',
  'ivysaur',
  'metapod',
  'weedle'
];

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        const filteredData = response.data.results.filter(pokemon =>
          specificPokemons.includes(pokemon.name)
        );
        setData(filteredData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleClick = (pokemonUrl) => {
    axios.get(pokemonUrl)
      .then(response => setPokemonDetails(response.data))
      .catch(error => console.error('Error fetching Pokémon details:', error));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <PokeButtons data={data} onClick={handleClick} />
      {pokemonDetails && (
        <div>
          <h2>{pokemonDetails.name}</h2>
          <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
          <p>Height: {pokemonDetails.height}</p>
          <p>Weight: {pokemonDetails.weight}</p>
        </div>
      )}
    </div>
  );
}

export default App;
