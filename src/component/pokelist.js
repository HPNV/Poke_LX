import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '../lib/quaries/GetPokemon';
import  Card from './card';

function PokemonList() {
  const [page, setPage] = React.useState(1);

  const handlePrevPage = () => {
    setPage(page => page - 1);
  };

  const handleNextPage = () => {
    setPage(page => page + 1);
  };

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { limit: 12, offset: (page - 1) * 12 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  return (
    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '20px',
        justifyContent: 'center',
        padding: '20px',
        borderRadius: '10px',
        background: 'lightgreen',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
      }}>
      {data.pokemons.results.map(pokemon => (
        <Card name={pokemon.name} />
      ))}
      <div style={{ 
          display: 'flex', 
          justifyContent: 'center' ,
          background: 'green',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          margin: '10px'
        }}>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={data.pokemons.results.length < 12}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;