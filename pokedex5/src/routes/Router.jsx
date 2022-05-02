import Home from '../pages/Home';
import Pokedex from '../pages/Pokedex';
import DetalheDoPokemon from '../pages/DetalheDoPokemon';
import {BrowserRouter, Routes, Route} from "react-router-dom";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Home />} />
          <Route path="Pokedex" element={ <Pokedex />} />
          <Route path="DetalheDoPokemon" element={ <DetalheDoPokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
