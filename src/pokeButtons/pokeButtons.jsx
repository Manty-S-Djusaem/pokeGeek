import React from 'react';

const PokeButtons = ({ data, onClick }) => {
  return (
    <div className="mainCont">
      {data.map(pokemon => (
        <button
          key={pokemon.name}
          className="cardButton"
          onClick={() => onClick(pokemon.url)}
        >
          <div className="cards">
            {pokemon.name}
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
          </div>
        </button>
      ))}
    </div>
  );
};

export default PokeButtons;
