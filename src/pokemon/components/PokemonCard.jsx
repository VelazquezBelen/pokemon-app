import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Star } from '../../icons/Star';
import { onChangeFavorite } from '../../store/slices/favorites';

export const PokemonCard = ({
	id,
	name,
	types,
	image,
}) => {

	
	const { favorites } = useSelector( state => state.favorites );
	const dispatch = useDispatch();

	const isFavorite = favorites.filter( p => p.id === id).length > 0;

	return (
		<div className="pokemon-card">
			<button className="btn-favorite" onClick={ () => dispatch(onChangeFavorite({id, name, types, image})) }>
			{ 
				isFavorite ? <Star className="fill" /> : <Star />
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
