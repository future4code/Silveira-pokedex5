import React, {useContext, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardAtaques from "../components/cardAtaques/CardAtaques";
import CardTipo from '../components/cardTipo/CardTipo';
import CardStatus from '../components/cardStatus/CardStatus';
import ImagemPokemon from "../components/imagemPokemon/ImagemPokemon";
import Header from "../components/header/Header";
import GlobalStateContext from "../context/GlobalStateContext";
import { irParaPokedex, voltar } from "../routes/coordinator";
import { BASE_URL } from "../constants/urls";
import axios from 'axios';

export default function DetalheDoPokemon() {
    
   const [detalhesPoke, setDetalhesPoke] = useState({})
    const params = useParams()
    console.log(params.pokemon)

    const getDetails = ()=>{
      axios.get (`${BASE_URL}/${params.pokemon}`)
      .then((res)=>{
        setDetalhesPoke(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })

    }

    useEffect(()=>{
      getDetails()
    },[])

  const navigate = useNavigate();

  return (
      <div>
        <Header title="Detalhes do Pokémon" btnEsquerda={()=>irParaPokedex(navigate)} btnDireita={()=>voltar(navigate)} btnDireitaTexto="Voltar" btnEsquerdaTexto="Ir para Pokédex" hasButton={true}/>
        <CardAtaques detalhes={detalhesPoke && detalhesPoke}/>
        
        {/* {detalhesPoke && detalhesPoke.hight} */}
        <CardTipo />
        <CardStatus />
        <ImagemPokemon />
      </div>
  );
}
