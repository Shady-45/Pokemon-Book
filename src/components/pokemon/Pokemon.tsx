import React from 'react'
import Pokelist from '../pokemonlist/Pokelist'
import PokemonSearch from '../PokemonSearch/PokemonSearch'
import './pokemon.css'
import { pokemonSchema } from '../../PokemonSchema'


interface PokemonProps {
  searchedPokemons:pokemonSchema[]
  onInputChange:(inputValue:string)=>void,
  selectedPokemon:pokemonSchema | undefined,
  onPokemonClick :(inputValue:string)=>void,
}

const Pokemon = ({searchedPokemons,onInputChange,selectedPokemon,onPokemonClick}:PokemonProps) => {
  
  
  return (
    <div className='pokemon-container'>
        <div className="pokemon-list">
            <p className='title-text'>List of Pokemon</p>
            <input type="search" onChange={(e)=>onInputChange(e.target.value)} className='search' placeholder='Search Pokemons' />
            <Pokelist  onPokemonClick={onPokemonClick}  searchedPokemons={searchedPokemons}/>
        </div>
        <div className="pokemon-searchlist">
     <PokemonSearch  selectedPokemon={selectedPokemon} /> 
        </div>
    </div>
  )
}

export default Pokemon