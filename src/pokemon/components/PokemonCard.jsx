import React from 'react'
import { Link } from 'react-router-dom'

export const PokemonCard = ({
    id,
    name,
    types,
    image,
}) => {
  return (
    <div className="pokemon-card">
        <Link to={`/pokemon/${ id }`}>
          
          <img src={image} alt="" />
          <h2>{name}</h2>
          <h3>#{id}</h3>

          <div className="tags">
          {
              types.map( ({type}) => (
                  <span key={type.name}>{type.name}</span>
              ))
          }
          </div>
        </Link>        
    </div>    
  )
}
