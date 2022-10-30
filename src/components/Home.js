import React from "react";
import { useState, useEffect } from "react";
import './styles.css';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await response.json();
    setPokemons(data.results);

  }, []);


  const getID = (pokemon) => {
    let splitURL = pokemon.url.split("/");
    return splitURL[splitURL.length - 2];
  };

  return (
    <div>
      <button className="ui primary button">Show All</button>
      <div class="container">
        {pokemons.map((pokemon) => (
          <div class="img-container">
            <h2>Name: {pokemon.name} </h2>
            <div class="img-item">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getID(
                  pokemon
                )}.png`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );


}
  
export default Home;
