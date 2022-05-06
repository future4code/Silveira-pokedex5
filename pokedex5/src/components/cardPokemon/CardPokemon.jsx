import React from "react"
import {CardPokemonStyled, Button, TituloCard, ContainerImagem, Imagem, ContainerButtons } from "./styled"

const CardPokemon = (props) => {
    return (
     <CardPokemonStyled>
        <TituloCard>{props.nome}</TituloCard>
        <ContainerImagem>
          <Imagem src={props.image}/>
        </ContainerImagem>
        <ContainerButtons>
          {props.hasAddButton === true ? <Button onClick={() => props.addToPokedex(props.nome)}>Adicionar na Pokédex</Button> : <Button onClick={() => props.removeFromPokedex(props.nome)}>Remover da Pokédex</Button>}      
          <Button>Ver detalhes</Button>
        </ContainerButtons>
     </CardPokemonStyled>
    );
  }
  
  export default CardPokemon;