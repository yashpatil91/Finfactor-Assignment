package com.pokedex.pokemonbackend.service;

import com.github.benmanes.caffeine.cache.Cache;
import com.pokedex.pokemonbackend.dto.PokemonResponseDto;
import com.pokedex.pokemonbackend.exception.PokemonNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class PokemonService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private Cache<String, PokemonResponseDto> pokemonCache;

    public PokemonResponseDto getPokemon(String name) {

        // Convert name to lowercase
        name = name.toLowerCase();

        // Check if pokemon data exists in cache
        PokemonResponseDto cachedPokemon =
                pokemonCache.getIfPresent(name);

        if (cachedPokemon != null) {

            System.out.println("Data fetched from CACHE");

            return cachedPokemon;
        }

        try {

            System.out.println("Data fetched from PokeAPI");

            // Create API URL
            String url =
                    "https://pokeapi.co/api/v2/pokemon/" + name;

            // Call API
            Map<String, Object> response =
                    restTemplate.getForObject(url, Map.class);

            // Create DTO object
            PokemonResponseDto dto =
                    new PokemonResponseDto();

            // Basic Details
            dto.setName(
                    (String) response.get("name")
            );

            dto.setHeight(
                    (Integer) response.get("height")
            );

            dto.setWeight(
                    (Integer) response.get("weight")
            );

            dto.setBaseExperience(
                    (Integer) response.get("base_experience")
            );

            // Pokemon Image
            Map<String, Object> sprites =
                    (Map<String, Object>) response.get("sprites");

            Map<String, Object> other =
                    (Map<String, Object>) sprites.get("other");

            Map<String, Object> officialArtwork =
                    (Map<String, Object>) other.get("official-artwork");

            dto.setImage(
                    (String) officialArtwork.get("front_default")
            );

            // Pokemon Types
            List<Map<String, Object>> types =
                    (List<Map<String, Object>>) response.get("types");

            dto.setTypes(
                    types.stream()
                            .map(typeObj -> {

                                Map<String, Object> type =
                                        (Map<String, Object>) typeObj.get("type");

                                return (String) type.get("name");
                            })
                            .toList()
            );

            // Pokemon Abilities
            List<Map<String, Object>> abilities =
                    (List<Map<String, Object>>) response.get("abilities");

            dto.setAbilities(
                    abilities.stream()
                            .map(abilityObj -> {

                                Map<String, Object> ability =
                                        (Map<String, Object>) abilityObj.get("ability");

                                return (String) ability.get("name");
                            })
                            .toList()
            );

            // Store in cache
            pokemonCache.put(name, dto);

            return dto;

        } catch (Exception e) {

            throw new PokemonNotFoundException(
                    "Pokemon not found"
            );
        }
    }
}

