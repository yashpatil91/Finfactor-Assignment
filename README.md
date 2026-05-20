# Pokémon Search Application

This project is a full-stack Pokédex application developed using Spring Boot and React.  
Users can search Pokémon by name and view details like image, type, abilities, height, weight, and experience.

The application uses the public PokéAPI to fetch Pokémon data and implements caching to improve performance for repeated searches.

---

## Features

- Search Pokémon by name
- Display Pokémon image and details
- Responsive UI with React
- Backend REST API using Spring Boot
- Caching using Caffeine Cache
- Cache expiry and maximum cache size handling
- Error handling for invalid Pokémon names
- Clear search functionality
- Enter key support for search

---

## Tech Stack

### Backend
- Java
- Spring Boot
- REST API
- RestTemplate
- Caffeine Cache
- Maven

### Frontend
- React.js
- CSS
- Vite

### External API
- PokéAPI  
  https://pokeapi.co/

---

## Project Structure

```text
Pokemon-Assignment
│
├── pokemon-backend
│
├── pokemon-frontend
│
└── README.md