package com.pokedex.pokemonbackend.controller;

import com.pokedex.pokemonbackend.service.PokemonService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class PokemonController {

    @Autowired
    private PokemonService pokemonService;

    @GetMapping("/pokemon/{name}")
    public Object getPokemon(@PathVariable String name){

        return pokemonService.getPokemon(name);
    }
}