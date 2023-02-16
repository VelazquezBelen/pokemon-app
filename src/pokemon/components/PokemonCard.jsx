import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { onChangeFavorite } from '../../store/slices/favorites';

export const PokemonCard = ({
	id,
	name,
	types,
	image,
}) => {

	//const { onChangeFavorite, isFavorite } = useContext(FavoritesContext);
	const { favorites } = useSelector( state => state.favorites );
	const dispatch = useDispatch();

	const isFavorite = favorites.filter( p => p.id === id).length > 0;

	return (
		<div className="pokemon-card">
			<button className="btn-favourite" onClick={ () => dispatch(onChangeFavorite({id, name, types, image})) }>
			{ isFavorite
				? <span className="material-symbols-outlined fill">
					grade
				</span>
				: <span className="material-symbols-outlined">
					grade
				</span>
			}
			</button>
			<Link to={`/pokemon/${id}`}>
				<img src={image} alt="" />
				<h2>{name}</h2>
				<h3>#{id}</h3>

				<div className="tags">
					{
						types.map(({ type }) => (
							<span key={type.name}>{type.name}</span>
						))
					}
				</div>
			</Link>
		</div>
	)
}
