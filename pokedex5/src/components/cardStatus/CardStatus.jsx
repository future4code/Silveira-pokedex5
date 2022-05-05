import React, { useContext } from "react"
import GlobalStateContext from "../../context/GlobalStateContext";
import {CardStatusStyled, H1, Poderes} from "./styled"


function CardStatus() {
    const status = useContext(GlobalStateContext);
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