function PokemonCard({ pokemonData }) {

  return (

    <div className="pokemon-card">

      <img
        src={pokemonData.image}
        alt={pokemonData.name}
        className="pokemon-image"
      />

      <h2 className="pokemon-name">
        {pokemonData.name}
      </h2>

      <div className="types-container">

        {pokemonData.types.map((type) => (

          <span
            key={type}
            className="pokemon-type"
          >
            {type}
          </span>

        ))}

      </div>

      <div className="pokemon-details">

        <p>
          <strong>Height:</strong>
          {" "}
          {pokemonData.height}
        </p>

        <p>
          <strong>Weight:</strong>
          {" "}
          {pokemonData.weight}
        </p>

        <p>
          <strong>Experience:</strong>
          {" "}
          {pokemonData.baseExperience}
        </p>

      </div>

      <h3 className="abilities-title">
        Abilities
      </h3>

      <div className="abilities-container">

        {pokemonData.abilities.map((ability) => (

          <span
            key={ability}
            className="ability-badge"
          >
            {ability}
          </span>

        ))}

      </div>

    </div>
  );
}

export default PokemonCard;