import { getEvolutionChain } from "./getEvolutionChain";

export const getPokemonData = async(pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const resp = await fetch(url);

    if (resp.status === 404) {
        return {
            status_code: 404 
        }
    }

    const urlSpecie = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`;
    const respSpecie = await fetch(urlSpecie);
    const dataSpecie = await respSpecie.json();

    const evolutionChain = await getEvolutionChain(dataSpecie.evolution_chain.url);

    const data = await resp.json();

    return{
        id: data.id,
        name: data.name,
        weight: data.weight/10,
        height: data.height*10,
        image: data.sprites.other.dream_world.front_default,
        abilities: data.abilities,
        evolution_chain: evolutionChain,
        flavor_text_entry: dataSpecie.flavor_text_entries[0].flavor_text,
        types: data.types,
        status_code: 200
    }
}