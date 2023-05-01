import Card from "../component/card";
import React from "react";
import { useState } from "react";
import { FavoriteProvider } from "../lib/context/favoriteList";

function SearchPage(){

    const [name, setName] = useState("");

    const handleSearch = (e) => {
        setName(e.target.value);
    }

    return(
        <FavoriteProvider>
        <div>
            <h1>Search Your Pokemon</h1>
            <input type="text" value={name} onChange={handleSearch} />
            <Card name={name}/>
        </div>
        </FavoriteProvider>
    )
}

export default SearchPage;