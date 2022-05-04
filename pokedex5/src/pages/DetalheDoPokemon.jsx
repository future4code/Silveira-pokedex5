import React from "react";
import { useNavigate } from "react-router-dom";

export default function DetalheDoPokemon() {
  const navigate = useNavigate();

  const voltar = () => {
    navigate(-1);
  };
  const proximaPagina = () => {
    navigate("/Pokedex");
  };
  return (
    <header>
      <div>Detalhes Pokemon</div>
      <button onClick={voltar}>Voltar</button>
      <button onClick={proximaPagina}>Ir para a pokedex</button>
    </header>
  );
}
