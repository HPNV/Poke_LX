import Card from "../component/card";
import React from "react";
import { GET_POKEMON } from "../lib/quaries/GetPokemon";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { FavoriteProvider } from "../lib/context/favoriteList";

function HomePage(){

    const [page, setPage] = useState(1);

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
    <FavoriteProvider>
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
    </FavoriteProvider>
  );
}

export default HomePage;