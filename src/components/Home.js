import React from "react";
import { useState, useEffect } from "react";
import './styles.css';
import axios from "axios";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        setPokemons(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const getName = (pokemon) => {
    return pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  };
  const getID = (pokemon) => {
    let splitURL = pokemon.url.split("/");
    return splitURL[splitURL.length - 2];
  };

  return (
    <div>
      <button className="ui primary button">Show All</button>

      {isError && <div>something wrong</div>}

      <div className="container">
        {!isLoading &&
          pokemons.results &&
          pokemons.results.map((pokemon) => (
            <div
              className="img-container"
              key={`https://pokeapi.co/api/v2/pokemon${getID(pokemon)}`}
            >
              <h2>Name: {getName(pokemon)}</h2>
              <div className="img-item">
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
};;
  
export default Home;
