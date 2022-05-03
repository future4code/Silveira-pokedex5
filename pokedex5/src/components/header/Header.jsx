import React from "react";
import {HeaderStyled, H1, Button} from "./styled"

function Header() {
    return (
      <HeaderStyled >
       <Button>Ir para Pokedex</Button>
       <H1>Lista de Pokémons</H1>
      </HeaderStyled>
    );
  }
  
  export default Header;