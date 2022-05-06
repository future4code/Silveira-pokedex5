import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardPokemon from "../components/cardPokemon/CardPokemon";
import styled from "styled-components";
import GlobalStateContext from "../context/GlobalStateContext";
import { BASE_URL } from "../constants/urls";
import Header from "../components/header/Header";

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  padding: 20px;
`;

const Home = () => {  

  const navigate = useNavigate();

  const proximaPagina = () => {
    navigate("/Pokedex");
  };

  const { states, setters } = useContext(GlobalStateContext);

 /*  const { list } = states;
  const { setList } = setters; */
  const { detalhes } = states;
  const { setDetalhes } = setters;
  const { pokedex } = states;
  const { setPokedex } = setters;

/*   useEffect(() => {

    getPokemon();

  }, []); */

/*   useEffect(() => {

    const novaPokeList = [];
    list &&
      list.forEach((poke) => {
        axios
          .get(`${BASE_URL}/${poke.name}`)
          .then((response) => {
            novaPokeList.push(response.data);
            if (novaPokeList.length === list.length) {
              const novaPokeListOrdenada = novaPokeList.sort((a,b)=>{
                return a.id - b.id;
              })
              setDetalhes(novaPokeListOrdenada);
            }
          })
          .catch((erro) => {
            console.log(erro);
          });
      });

  }, [list]);


  const getPokemon = () => {
    axios
      .get(`${BASE_URL}?limit=20&offset=0`)
      .then((response) => {
        setList(response.data.results);
      })
      .catch((error) => {
        console.log("Desculpe houve um erro, tente novamente!", error.response);
      });
  }; */

  const addToPokedex = (pokemonToAdd) => {

    detalhes.map((pokemon) => {
      if (pokemon.name === pokemonToAdd) {
        setPokedex([...pokedex, pokemon]);
        setDetalhes(detalhes.filter((pokemonToAdd) => pokemonToAdd !== pokemon));
      }
    })

  };


  const listaPokemon =
    detalhes &&
    detalhes.map((poke) => {
      return (
        <CardPokemon
          key={poke.name}
          nome={poke.name}
          image={poke.sprites.other.dream_world.front_default}
          hasAddButton={true}
          addToPokedex={addToPokedex}
        />
      );
    });

  return (
    <div>
      <Header title="Lista de Pokémons" btnEsquerda={proximaPagina} btnEsquerdaTexto="Ir para Pokédex" hasButton={false}/>
      <ContainerGrid>
        {listaPokemon}
      </ContainerGrid>
    </div>
  );
}

export default Home;