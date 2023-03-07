import React from 'react'
import Pokelist from '../pokemonlist/Pokelist'
import PokemonSearch from '../PokemonSearch/PokemonSearch'
import './pokemon.css'

const Pokemon = () => {
  return (
    <div className='pokemon-container'>
        <div className="pokemon-list">
            <p>List of Pokemon</p>
            <input type="search" className='search' placeholder='Search Pokemons' />
            <Pokelist/>
        </div>
        <div className="pokemon-searchlist">
   
    <PokemonSearch/>
        </div>
    </div>
  )
}

export default Pokemon