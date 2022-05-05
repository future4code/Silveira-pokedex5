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
          <Button>Adicionar um Pokédex</Button>
          <Button onClick={()=>props.irParaDetalhes()}>Ver detalhes</Button>
        </ContainerButtons>
     </CardPokemonStyled>
    );
  }
  
  export default CardPokemon;