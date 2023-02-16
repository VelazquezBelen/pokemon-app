import { useSelector } from "react-redux";
import { PokemonCard } from "../../pokemon";

export const FavoritesPage = () => {

    const { favorites = [] } = useSelector( state => state.favorites );

    return (
        <div className="favorites"> 
            <h1>My Favorites</h1>
            <ul>
                {
                    favorites.map( pokemon => (
                        <PokemonCard 
                            key={pokemon.id} 
                            {...pokemon}                         
                        />
                    ))
                }          
            </ul>
        </div>
    )
}