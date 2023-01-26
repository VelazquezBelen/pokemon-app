
export const getPokemonImage = async(pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const resp = await fetch(url);

    const data = await resp.json();

    return data.sprites.other.dream_world.front_default;
}