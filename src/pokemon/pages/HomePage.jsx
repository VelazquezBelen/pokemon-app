import { useState } from "react";
import { AddPokemon, PokemonList } from "../components";

export const HomePage = () => {

  const [pokemon, setPokemon] = useState("");  

    const onNewPokemon = (newPokemon) => {
        setPokemon(newPokemon);
    }

    return (
    <div className="pokemon-app">
        <AddPokemon onNewPokemon={(event) => onNewPokemon(event) } />                
        <PokemonList pokemonName={pokemon}/>     
    </div>
  )
}
