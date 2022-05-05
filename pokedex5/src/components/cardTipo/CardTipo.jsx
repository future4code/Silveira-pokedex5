import React, { useContext } from "react"
import GlobalStateContext from "../../context/GlobalStateContext";
import {CardTipoStyled, Tipo1, Tipo2 } from "./styled"


function CardTipo() {
    const tipo = useContext(GlobalStateContext);
    return (
     <CardTipoStyled>
         <Tipo1>tipo 1</Tipo1>
         <Tipo2>tipo 2</Tipo2>
     </CardTipoStyled>
    );
}
  
export default CardTipo;