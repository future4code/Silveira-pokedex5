import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardAtaques from "../components/cardAtaques/CardAtaques";
import CardTipo from '../components/cardTipo/CardTipo';
import CardStatus from '../components/cardStatus/CardStatus';
import Header from "../components/header/Header";
import { irParaPokedex, voltar } from "../routes/coordinator";
import { BASE_URL } from "../constants/urls";
import axios from 'axios';
import { Poderes } from "../components/cardStatus/styled";
import { Tipo } from "../components/cardTipo/styled";
import { Ataque } from "../components/cardAtaques/styled";
import ImagemPokemonFrente from "../components/imagemPokemon/ImagemPokemonFrente";
import ImagemPokemonCosta from "../components/imagemPokemon/ImagemPokemonCosta";

export default function DetalheDoPokemon() {
    
   const [detalhesPoke, setDetalhesPoke] = useState()
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

  const status = detalhesPoke && detalhesPoke.stats.map((poder)=>{
  
    return (
      <Poderes key={poder.stat.name}>{poder.stat.name}: {poder.base_stat}</Poderes>
    )
  })

  const tipos = detalhesPoke && detalhesPoke.types.map((tipo)=>{
  
    return (
      <Tipo key={tipo.type.name}>{tipo.type.name}</Tipo>
    )
  })

  const ataque = detalhesPoke && detalhesPoke.moves.map((move,index)=>{
  
    return (
      
    index < 6 && <Ataque key={move.move.name}>{move.move.name}</Ataque>
    )
  })

  const imagemFrente = detalhesPoke && detalhesPoke.sprites.other.dream_world.front_default
  const imagemCosta = detalhesPoke && detalhesPoke.sprites.back_default

  return (
      <div>
        <Header title="Detalhes do Pokémon" btnEsquerda={()=>irParaPokedex(navigate)} btnDireita={()=>voltar(navigate)} btnDireitaTexto="Voltar" btnEsquerdaTexto="Ir para Pokédex" hasButton={true}/>
       
        <CardAtaques ataque={ataque}/>
        <CardTipo tipos={tipos}/>
        <CardStatus poderes={status} />
        <ImagemPokemonFrente imagem={imagemFrente} />
        <ImagemPokemonCosta imagem={imagemCosta} />
      </div>
  );
}
