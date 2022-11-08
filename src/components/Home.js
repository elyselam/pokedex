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
            "https://pokeapi.co/api/v2/pokemon?limit=10"
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
  console.warn("results: ", pokemons.results);

  return (
    <div>
      <button className="ui primary button">Show All</button>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        pokemons.results &&
        pokemons.results.map((pokemon) => <h2>{getName(pokemon)}</h2>)
      )}
    </div>
  );
};
  
export default Home;
