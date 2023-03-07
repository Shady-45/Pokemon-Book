import React from 'react'
import './PokemonSearch.css'

const PokemonSearch = () => {
    const isSelected = false
  return (
    <div className='pokemon-result-card'>
        {
            isSelected ? (
                <div >
                    <h2>Name: Pikachu</h2>
                    <h2>Height: 24</h2>
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