import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GET_DETAIL } from "../lib/quaries/GetDetail";
import { useQuery } from "@apollo/client";

function PokemonDetailPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_DETAIL, {
    variables: { name: name },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  const pokemon = data.pokemon;
  const types = pokemon.types.map((type) => type.type.name).join(", ");

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Type: {types}</p>
      <p>
        Abilities:{" "}
        {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
      </p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default PokemonDetailPage;
