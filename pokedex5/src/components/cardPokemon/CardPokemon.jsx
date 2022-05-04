import React from "react"
import {CardPokemonStyled, Button, TituloCard } from "./styled"

const CardPokemon = (props) => {
    return (
     <CardPokemonStyled>
         <img src={props.image}/>
         <TituloCard>{props.nome}</TituloCard>
         <Button>Adicionar um Pokédex</Button>
         <Button>Ver detalhes</Button>
     </CardPokemonStyled>
    );
  }
  
  export default CardPokemon;