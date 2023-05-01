import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import SearchPage from './Pages/search';
import HomePage from './Pages/home';
import Navbar from './component/navbar';
import FavoritePage from './Pages/favorite';
import { useEffect } from 'react';
import { FavoriteProvider } from './lib/context/favoriteList';
import PokemonDetailPage from './Pages/detail';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.graphcdn.app/',
  cache: new InMemoryCache(),
});

function App() {
  window.addEventListener("beforeunload", function (event) {
    localStorage.removeItem("first");
  });

  useEffect(() => {
    console.log("useEffect executed");
    const first = localStorage.getItem("first");
    if (first === null) {
        localStorage.removeItem("favorites");
        localStorage.setItem("first", "false");
    }
  }, []);

  return (
    <ApolloProvider client={client}>
          <Navbar />
          <div className="App">
          <FavoriteProvider>
            <BrowserRouter>
              <Routes>
                <Route  path="/" element={<HomePage/>} />
                <Route  path="/search" element={<SearchPage/>} />
                <Route  path="/favorites" element={<FavoritePage/>} />
                <Route  path="/pokemon/:name" element={<PokemonDetailPage/>} />
              </Routes>
            </BrowserRouter>
          </FavoriteProvider>
          </div>
      </ApolloProvider>
  );
}

export default App;