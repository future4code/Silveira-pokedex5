import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import CardPokemon from "../components/cardPokemon/CardPokemon";

export default function Home() {
  const [detalhes, setDetalhes] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => {
        setList(response.data.results);
        console.log("Você acaba de pegar Pokemons!", response.data.results);
      })
      .catch((error) => {
        console.log("Desculpe houve um erro, tente novamente!", error.response);
      });
  };

  useEffect(() => {
    const novaPokeList = [];
    list &&
      list.forEach((poke) => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
          .then((response) => {
            console.log(response.data);
            novaPokeList.push(response.data);
            if (novaPokeList.length === 20) {
              setDetalhes(novaPokeList);
            }
          })
          .catch((erro) => {
            console.log(erro);
          });
      });
  });
console.log(detalhes)
  const listaPokemon =
    detalhes &&
    detalhes.map((poke) => {
      return (
        <CardPokemon
          nome={poke.name}
          image={poke.sprites.other.dream_world.front_default}
        />
      );
    });

  const navigate = useNavigate();

  const proximaPagina = () => {
    navigate("/Pokedex");
  };

  return (
    <div>
      <h1>Pokedex</h1>
      {listaPokemon}
      <button onClick={proximaPagina}>Ir para Pokedex</button>
    </div>
  );
}
