import { useState } from "react";



export const AddPokemon = ({onNewPokemon}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();        
        onNewPokemon( inputValue.trim() );
    }

    return (
        <div className="search-bar">
            <h2>Pokédex</h2>
            <p>Search for a Pokémon by name or using its number</p>
            <form onSubmit={ onSubmit }>
                <span className="material-symbols-outlined">search</span>                
                <input 
                    type="text"
                    placeholder="Name or number"
                    value={ inputValue }
                    onChange={ onInputChange }
                />
            </form>
        </div>
    )        
}
