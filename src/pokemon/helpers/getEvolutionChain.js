import { getPokemonImage } from "./getPokemonImage";

export const getEvolutionChain = async(url) => {
    const resp = await fetch(url);

    const data = await resp.json();
    
    var evoChain = [];
    var evoData = data.chain;

    do {
        const image = await getPokemonImage(evoData.species.name);

        evoChain.push({
            "species_name": evoData.species.name,
            "image": image
        });

        evoData = evoData['evolves_to'][0];
    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

    return evoChain; 
}