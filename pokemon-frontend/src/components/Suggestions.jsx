function Suggestions({
  suggestions,
  setPokemonName
}) {

  return (

    <div className="suggestions-container">

      <p className="suggestion-text">
        Try searching:
      </p>

      <div className="suggestion-buttons">

        {suggestions.map((name) => (

          <button
            key={name}
            onClick={() =>
              setPokemonName(name)
            }
            className="suggestion-button"
          >
            {name}
          </button>

        ))}

      </div>

    </div>
  );
}

export default Suggestions;