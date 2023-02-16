import { useDispatch, useSelector } from "react-redux";
import { onChangeFavorite } from "../../store/slices/favorites";
import { EvolutionChain } from "./EvolutionChain"
import { Star } from '../../icons/Star';

export const PokemonInfo = ({
	name,
	id,
	image,
	flavor_text_entry,
	weight,
	height,
	abilities,
	evolution_chain,
	types
}) => {

	const { favorites } = useSelector( state => state.favorites );
	const dispatch = useDispatch();

	const isFavorite = favorites.filter( p => p.id === id).length > 0;

	return (
		<div className="pokemon-info">			
			<h2>{name} #{id}</h2>
			<div className="pokemon-card-info">
				<img src={image} alt="Imagen del pokemon" />
				<div className="pokemon-card-list">
				<button className="btn-favorite" onClick={ () => dispatch(onChangeFavorite({id, name, types, image})) }>
				{ 
					isFavorite ? <Star className="fill" /> : <Star />
				}
				</button>
									
					<p>{flavor_text_entry}</p>
					<ul>
						<li>
							<span>Weight: </span>{weight} kg.
						</li>
						<li>
							<span>Height: </span>{height} cm.
						</li>
						<li>
							<span>Abilities: </span>
							<ul>
								{
									abilities.map(({ ability }) => (
										<li key={ability.name}>{ability.name}</li>
									))
								}
							</ul>
						</li>
						<li>
							<span>Types: </span>
							<ul>
								{
									types.map(({ type }) => (
										<li key={type.name}>{type.name}</li>
									))
								}
							</ul>
						</li>
					</ul>
					
				</div>				
			</div>
			<EvolutionChain evolutions={evolution_chain} />
		</div>
	)
}