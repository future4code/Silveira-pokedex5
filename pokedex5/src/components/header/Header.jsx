import React from "react";
import {HeaderStyled, H1, Button} from "./styled"

function Header(props) {
    return (
      <HeaderStyled >
       <Button onClick={props.btnEsquerda}>{props.btnEsquerdaTexto}</Button>
       <H1>{props.title}</H1>
       {props.hasButton === true ? <Button onClick={props.btnDireita}>{props.btnDireitaTexto}</Button> : null}
      </HeaderStyled>
    );
  }
  
  export default Header;