import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PokemonCard } from "../../pokemon";
import { startLoadingFavorites, getFavorites } from '../../store/slices/favorites';

export const FavoritesPage = () => {

    const { favorites = [], isLoading } = useSelector( state => state.favorites );
    const dispatch = useDispatch();

    const loadFavorites = () => {
        dispatch( startLoadingFavorites() );
        dispatch( getFavorites() );
    }

    useEffect(() => {
        loadFavorites();       
    }, [])
    
    return (
        <div className="favorites"> 
            <h1>My Favorites</h1>
            <span> {isLoading && 'Loading...'} </span>
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