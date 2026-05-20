package com.pokedex.pokemonbackend.dto;

import lombok.Data;

import java.util.List;

@Data
public class PokemonResponseDto {

    private String name;

    private Integer height;

    private Integer weight;

    private Integer baseExperience;

    private String image;

    private List<String> types;

    private List<String> abilities;
}