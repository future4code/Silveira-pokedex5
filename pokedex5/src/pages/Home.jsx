import React from "react";
import {useNavigate} from "react-router-dom"

export default function Home () {
    const navigate = useNavigate()

    const proximaPagina = () => {
        navigate("/Pokedex")
    }

    return(
       <header>
           <button onClick={proximaPagina}>Ir para Pokedex</button>
       <div>Página Home</div>
       </header>
    )
}
