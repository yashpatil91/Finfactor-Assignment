package com.pokedex.pokemonbackend.exception;

public class PokemonNotFoundException extends RuntimeException {

    public PokemonNotFoundException(String message) {
        super(message);
    }
}