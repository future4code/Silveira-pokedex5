import React, { useContext } from "react"
import GlobalStateContext from "../../context/GlobalStateContext";
import {CardAtaqueStyled, H1 } from "./styled"


function CardAtaque(props) {
    const ataque = useContext(GlobalStateContext);
    return (
     <CardAtaqueStyled>
         {/* <H1>Principais Ataques: {ataque.tipo}</H1> */}
         <h3>Pokemon: {props.detalhes.name}</h3>
         <h3>Altura: {props.detalhes.height}</h3>
         <h3>{props.detalhes.weight}</h3>
     </CardAtaqueStyled>
    );
  }
  
  export default  CardAtaque;