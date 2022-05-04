import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {  
  const [list, setList] = useState([]);
  const [detalhes, setDetalhes] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  const states = { list, detalhes, pokedex };
  const setters = { setList, setDetalhes, setPokedex };
  const requests = {};

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
