import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await response.json();
    setPokemons(data.results);
    console.log(pokemons);
  }, []);
  console.log(pokemons);
  return (
    <div>
      <button className="ui primary button">Show All</button>
      <div>
        {pokemons.map(({ name, url }) => (
          <li key={url}>{name}</li>
        ))}
      </div>
      )
    </div>
  );

  //   <style>
  //     .container {
  //     display: flex;
  //     flex-wrap: wrap;
  //     text-align: center;

  // }

  // .img-container {
  // border: dotted 2px black;
  // width: 600px;
  // height: 600px;
  // min-width: auto;
  // min-height: auto;
  // overflow: hidden;
  // }
  //   </style>
};;


export default Home;
