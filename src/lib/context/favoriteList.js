import React, { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
      });
        
    const addToFavorites = (name) => {

        setFavorites([...favorites, name]);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    };

    const removeFavorite = (name) => {
        setFavorites(favorites.filter((favorite) => favorite !== name));
        localStorage.setItem("favorites", JSON.stringify(favorites));
    };

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }, [favorites]);

    const contextValues = {
        favorites,
        addToFavorites,
        removeFavorite,
    };

    return (
        <FavoriteContext.Provider value={contextValues}>
        {children}
        </FavoriteContext.Provider>
    );
};