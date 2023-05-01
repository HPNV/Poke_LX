import React, { useContext, useEffect, useState } from "react";
import Card from "../component/card";
import { FavoriteContext } from "../lib/context/favoriteList";
import { FavoriteProvider } from "../lib/context/favoriteList";

function FavoritePage() {
  const { favorites } = useContext(FavoriteContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Map the favorite Pokemon to Card components
    const newCards = favorites.map((pokemon) => <Card key={pokemon} name={pokemon} />);
    setCards(newCards);
  }, [favorites]); // This useEffect will re-run whenever the `favorites` array changes

  if (favorites.length === 0) {
    return (
      <div>
        <h1>Favorite Pokemon</h1>
        <p>There is no favorite pokemon</p>
      </div>
    );
  }

  return (
    <FavoriteProvider>
      <div>
        <h1>Favorite Pokemon</h1>
        <div
          className="pokemon-list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
            justifyContent: "center",
            padding: "20px",
            borderRadius: "10px",
            background: "lightgreen",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          {cards}
        </div>
      </div>
    </FavoriteProvider>
  );
}

export default FavoritePage;
