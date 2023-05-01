import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BY_NAME } from "../lib/quaries/GetByName";
import { useContext } from "react";
import { FavoriteContext } from "../lib/context/favoriteList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Card({ name }) {
  const { favorites, addToFavorites, removeFavorite } =
    useContext(FavoriteContext);

  const handleAddToFavorites = () => {
    addToFavorites(name);
  };

  const handleRemoveFromFavorites = () => {
    removeFavorite(name);
  };

  const isFavorite = favorites.includes(name);

  const { loading, error, data } = useQuery(GET_BY_NAME, {
    variables: { name: name },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Pokemon Not Found</p>;
  if (name === "") {
    return <div></div>;
  }
  const sprite = data?.pokemon?.sprites?.front_default;
  if (!sprite) return <p>Pokemon Not Found</p>;

  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #00BFFF, #228B22)",
        borderRadius: "10px",
        width: "100%",
        maxWidth: "300px",
        padding: "1vw",
        margin: "1vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Roboto",
      }}
    >
      <a href={`pokemon/${data.pokemon.name}`}>
        <img
          style={{
            background: "purple",
            width: "100%",
            maxWidth: "150px",
            height: "auto",
            borderRadius: "10px",
            marginBottom: "1rem",
          }}
          src={sprite}
          alt={data.pokemon.name}
        />
      </a>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "0.5rem",
            flex: "1",
          }}
        >
          {data.pokemon.name}
        </p>
        <div>
          {isFavorite === true ? (
            <button
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                outline: "none",
              }}
              onClick={handleRemoveFromFavorites}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
          ) : (
            <button
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                outline: "none",
              }}
              onClick={handleAddToFavorites}
            >
              Add Favorite
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
