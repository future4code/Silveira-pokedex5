import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header/Header";
import CardPokemon from "../components/cardPokemon/CardPokemon";
import GlobalStateContext from "../context/GlobalStateContext";

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  padding: 20px;
`;

export default function Pokedex() {
    const navigate = useNavigate()

    const voltar = () => {
      navigate("/");
    }
      
    const { states, setters } = useContext(GlobalStateContext);
    const { pokedex } = states;
    const { setPokedex } = setters;


    const removeFromPokedex = (pokemonToRemove) => {

    pokedex.map((pokemon) => {
      if (pokemon.name === pokemonToRemove) {
        setPokedex(pokedex.filter((pokemonDeleted) => pokemonDeleted !== pokemon))
      }
    })
  };

    const listaPokemon =
      pokedex &&
      pokedex.map((poke) => {
        return (
          <CardPokemon
            key={poke.name}
            nome={poke.name}
            image={poke.sprites.other.dream_world.front_default}
            hasAddButton={false}
            removeFromPokedex={removeFromPokedex}
          />
        );
    });

    return(
      <div>
        <Header title="Pokédex" btnEsquerda={voltar} btnEsquerdaTexto="Ir para Lista de Pokemons" hasButton={false}/>
        <ContainerGrid>
          {listaPokemon}
        </ContainerGrid>
      </div>
    )
}
