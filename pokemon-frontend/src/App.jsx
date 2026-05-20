import { useState } from "react";

import "./App.css";

import SearchBar from "./components/SearchBar";
import Suggestions from "./components/Suggestions";
import PokemonCard from "./components/PokemonCard";

function App() {

  const [pokemonName, setPokemonName] =
    useState("");

  const [pokemonData, setPokemonData] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const suggestions = [
    "pikachu",
    "charizard",
    "bulbasaur",
    "squirtle",
    "mewtwo"
  ];

  // Search Pokemon

  const searchPokemon = async () => {

    if (!pokemonName) return;

    try {

      setLoading(true);

      setError("");

      const response = await fetch(
        `http://localhost:8080/pokemon/${pokemonName.toLowerCase()}`
      );

      const data = await response.json();

      if (!response.ok) {

        throw new Error(
          data.message || "Pokemon not found"
        );
      }

      setPokemonData(data);

    } catch (err) {

      setError(err.message);

      setPokemonData(null);

    } finally {

      setLoading(false);
    }
  };

  // Clear Search

  const clearSearch = () => {

    setPokemonName("");

    setPokemonData(null);

    setError("");
  };

  return (

    <div className="app-container">

      {/* TITLE */}

      <h1 className="title">
        Pokédex Search
      </h1>

      {/* SEARCH BAR */}

      <SearchBar
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
        searchPokemon={searchPokemon}
        clearSearch={clearSearch}
      />

      {/* SUGGESTIONS */}

      <Suggestions
        suggestions={suggestions}
        setPokemonName={setPokemonName}
      />

      {/* LOADING */}

      {loading && (

        <h2 className="loading-text">
          Loading...
        </h2>

      )}

      {/* ERROR */}

      {error && (

        <h2 className="error-text">
          {error}
        </h2>

      )}

      {/* CARD */}

      {pokemonData && (

        <PokemonCard
          pokemonData={pokemonData}
        />

      )}

      {/* FOOTER */}

      <p className="footer-text">
        Powered by PokéAPI
      </p>

    </div>
  );
}

export default App;