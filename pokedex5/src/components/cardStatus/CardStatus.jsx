import React, { useContext } from "react"
import GlobalStateContext from "../../context/GlobalStateContext";
import {CardStatusStyled, H1, Poderes} from "./styled"


const CardStatus = (props) => {
    return (
     <CardStatusStyled>
         <H1>Poderes</H1>
        {props.poderes}
     </CardStatusStyled>
    );
  }
  
  export default CardStatus;