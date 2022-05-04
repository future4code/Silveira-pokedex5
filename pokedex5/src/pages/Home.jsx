import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardPokemon from "../components/cardPokemon/CardPokemon";
import styled from "styled-components";
import GlobalStateContext from "../context/GlobalStateContext";

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  padding: 20px;
`;

const Home = () => {  
  const { states, setters } = useContext(GlobalStateContext);

  const { list } = states;
  const { setList } = setters;
  const { detalhes } = states;
  const { setDetalhes } = setters;

  useEffect(() => {

    getPokemon();

  }, []);

  useEffect(() => {

    const novaPokeList = [];
    list &&
      list.forEach((poke) => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
          .then((response) => {
            novaPokeList.push(response.data);
            if (novaPokeList.length === 20) {
              setDetalhes(novaPokeList);
            }
          })
          .catch((erro) => {
            console.log(erro);
          });
      });

  }, [list]);


  
    

  const getPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => {
        setList(response.data.results);
      })
      .catch((error) => {
        console.log("Desculpe houve um erro, tente novamente!", error.response);
      });
  };

  const listaPokemon =
    detalhes &&
    detalhes.map((poke) => {
      return (
        <CardPokemon
          key={poke.name}
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
      <ContainerGrid>
        {listaPokemon}
      </ContainerGrid>
      <button onClick={proximaPagina}>Ir para Pokedex</button>
    </div>
  );
}

export default Home;