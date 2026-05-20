function SearchBar({
  pokemonName,
  setPokemonName,
  searchPokemon,
  clearSearch
}) {

  return (

    <div className="search-container">

      <input
        type="text"
        placeholder="Enter Pokémon Name"
        value={pokemonName}
        onChange={(e) =>
          setPokemonName(e.target.value)
        }
        onKeyDown={(e) => {

          if (e.key === "Enter") {

            searchPokemon();
          }
        }}
        className="search-input"
      />

      <button
        onClick={searchPokemon}
        className="search-button"
      >
        Search
      </button>

      <button
        onClick={clearSearch}
        className="clear-button"
      >
        Clear
      </button>

    </div>
  );
}

export default SearchBar;