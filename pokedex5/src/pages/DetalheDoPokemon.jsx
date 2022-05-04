import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";

export default function DetalheDoPokemon() {
  const navigate = useNavigate();

  const voltar = () => {
    navigate("/");
  };
  const proximaPagina = () => {
    navigate("/Pokedex");
  };
  return (
      <Header title="Detalhes do Pokémon" btnEsquerda={proximaPagina} btnDireita={voltar} btnDireitaTexto="Voltar" btnEsquerdaTexto="Ir para Pokédex" hasButton={true}/>
  );
}
