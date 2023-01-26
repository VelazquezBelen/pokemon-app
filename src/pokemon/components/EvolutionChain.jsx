import React from 'react'

export const EvolutionChain = ({evolutions}) => {
  return (
    <div className="evolutions">
        <h3>Evolutions</h3>
        <ul>
        {
            evolutions.map(({species_name, image}) => (
                <li key={species_name}>                    
                    <img src={image} alt="" />
                    <span>{species_name}</span>
                </li>
            ))
        }    
        </ul>
    </div>
  )
}