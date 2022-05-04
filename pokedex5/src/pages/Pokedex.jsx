import React from "react";
import {useNavigate} from "react-router-dom";
import Header from "../components/header/Header";

export default function Pokedex() {
    const navigate = useNavigate()

    const voltar = () => {
      navigate("/");
    }
    return(
      <Header title="Pokédex" btnEsquerda={voltar} btnEsquerdaTexto="Ir para Lista de Pokemons" hasButton={false}/>
    )
}
