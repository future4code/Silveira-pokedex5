import React from "react"
import {CardTipoStyled, Button } from "./styled"


function CardTipo() {
    return (
     <CardTipoStyled>
         <p>Imagem</p>
         <Button>Adicionar um Pokédex</Button>
         <Button>Ver detalhes</Button>
     </CardTipoStyled>
    );
  }
  
  export default CardTipo;