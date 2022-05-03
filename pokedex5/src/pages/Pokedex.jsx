import React from "react";
import {useNavigate} from "react-router-dom"

export default function Pokedex() {
    const navigate = useNavigate()

    const voltar = () => {
        navigate(-1)
    }
    return(
        <header>
            <div>Página Pokedex</div>
            <button onClick={voltar}>Voltar para lista de pokemons</button>
        </header>
    )
}
