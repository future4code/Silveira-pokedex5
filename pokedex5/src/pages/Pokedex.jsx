import React from "react";
import {useNavigate} from "react-router-dom";
import Header from "../components/header/Header";
import { irParaHome } from "../routes/coordinator";

export default function Pokedex() {
    const navigate = useNavigate()

    return(
      <Header title="Pokédex" btnEsquerda={()=>irParaHome(navigate)} btnEsquerdaTexto="Ir para Lista de Pokemons" hasButton={false}/>
    )
}
