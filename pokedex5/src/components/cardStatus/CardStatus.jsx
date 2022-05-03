import React from "react"
import {CardStatusStyled, H1, Poderes} from "./styled"


function CardStatus() {
    return (
     <CardStatusStyled>
         <H1>Poderes</H1>
         <Poderes>CV:</Poderes>
         <Poderes>ATAQUE:</Poderes>
         <Poderes>DEFESA:</Poderes>
         <Poderes>ATAQUE ESPECIAL:</Poderes>
         <Poderes>DEFESA ESPECIAL:</Poderes>
         <Poderes>VELOCIDADE:</Poderes>
     </CardStatusStyled>
    );
  }
  
  export default CardStatus;