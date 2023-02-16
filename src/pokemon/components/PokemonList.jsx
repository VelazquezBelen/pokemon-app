import { useEffect, useState } from 'react'
import { getPokemonData } from '../helpers/getPokemonData';
import { getPokemonList } from '../helpers/getPokemonList'
import { NotFound } from './NotFound';
import { PokemonCard } from './PokemonCard';

export const PokemonList = ({pokemonName}) => {

    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);

    let notFound = pokemonName !== "" && pokemons.length === 0;

    let loadMore = pokemons.length >= 20;

    const getPokemons = async() => {
        const resp = await getPokemonList(offset);
        if (offset === 0 ) {
            setPokemons(resp);   
        } else {
            setPokemons(pokemons.concat(resp));   
        }
    }

    const getPokemon = async() => {

        const pokemon = pokemons.filter(pokemon => 
            pokemon.id === Number(pokemonName) || pokemon.name === pokemonName.toLowerCase()           
        )

        if (pokemon.length > 0) {
            setPokemons(pokemon);
        } else {
            const res = await getPokemonData(pokemonName.toLowerCase());
            if (res.status_code === 200){
                setPokemons([res]);
            } else {
                setPokemons([]);
                notFound = true;
            }
        } 
    }

    useEffect( () => {
        getPokemons();        
    }, [offset])
    

    useEffect( () => {   
        if (pokemonName === ""){
            getPokemons(); 
        }
        else getPokemon();                           
    }, [pokemonName] ); 

    return (
        <div className="pokemon-list"> 
            <ul>
                {
                    pokemons.map( pokemon => (
                        <PokemonCard 
                            key={pokemon.id} 
                            {...pokemon}                         
                        />
                    ))
                }
                <div style={{ display: notFound ? '' : 'none' }}>
                    <NotFound pokemonName={pokemonName}/>
                </div>            
            </ul>
            <button 
                style={{ display: loadMore ? '' : 'none' }} 
                onClick={() => setOffset(offset+20)}
            >
                Load more Pokémon
            </button>
            
        </div>
    )
}