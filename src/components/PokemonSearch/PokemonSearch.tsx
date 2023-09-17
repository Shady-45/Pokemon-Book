import React from 'react'
import './PokemonSearch.css'
import { pokemonSchema } from '../../PokemonSchema'


interface PokemonSearchProps{
selectedPokemon:pokemonSchema | undefined
}

const PokemonSearch = ({selectedPokemon}:PokemonSearchProps) => {
    
    const {name, id, height, weight, base_experience, sprites}=selectedPokemon || {}
  return (
    <div className='pokemon-result-card'>
        {
            selectedPokemon ? (
                <div >
                 <img className='pokemon-animated' src={sprites?.animated || sprites?.normal}
                 
                  alt="Pokemon" />
                  <p>Name: {name}</p>
                  <p>Id: {id}</p>
                  <p>Height: {height}</p>
                  <p>Weight: {weight}</p>
                    <p>Base Exp:{base_experience}</p>
                </div>
            )
            :(
                <h2>Check out the characters</h2>
            )
        }
    </div>
  )
}

export default PokemonSearch