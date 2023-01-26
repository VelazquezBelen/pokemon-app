import React from 'react'

export const NotFound = ({pokemonName}) => {
  return (
    <div className="card-not-found">
        <h2>404 Not Found</h2>
        <p>{ pokemonName } pokemon not found</p>
    </div>
  )
}
