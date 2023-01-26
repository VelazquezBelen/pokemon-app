import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NotFound, PokemonInfo } from "../components";
import { getPokemonData } from "../helpers";

export const PokemonPage = () => {

  const { id } = useParams();

  const [pokemonData, setPokemon] = useState("");

    const getData = async(id) => {
      const res = await getPokemonData(id);
      setPokemon(res);
    }

    useEffect(() => {
      getData(id);
    }, [id]);

  return (
    <>
			{
				( pokemonData && pokemonData.status_code === 200) && 
				(
          <PokemonInfo {...pokemonData}/>
				) 
			}
			{
				( pokemonData && pokemonData.status_code === 404) && 
				(
					<NotFound pokemonName={id}/>
				) 
			}
		</>
  )
}
