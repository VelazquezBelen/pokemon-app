
export const getPokemonList = async(offset) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;
    const resp = await fetch(url);

    const {results} = await resp.json();


    const pokemons = await Promise.all (
        
        await results.map( async (pokemon) => {  
        
            const resp = await fetch(pokemon.url);
            const data = await resp.json();
            
            return {
                id: data.id,
                name: pokemon.name,
                types: data.types,
                image: data.sprites.other.dream_world.front_default,
            }
        })
    );    

    return pokemons;
}