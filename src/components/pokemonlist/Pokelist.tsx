import React from 'react'
import Pokecard from '../pokemon-card/Pokecard'
import "./Pokelist.css"
import { pokemonSchema } from '../../PokemonSchema'

interface PokelistProps{
  searchedPokemons:pokemonSchema[],
  onPokemonClick :(inputValue:string)=>void,
}
const Pokelist = ({searchedPokemons,onPokemonClick}:PokelistProps) => {
  return (
    <div className='pokemon-list'>
    {
      searchedPokemons.map((pokemon)=>{
        return(
          pokemon.name && <Pokecard onPokemonClick={onPokemonClick} key={pokemon.id} name={pokemon.name}  spritUrl={pokemon.sprites.normal} />
        )
      })
    }
    </div>
  )
}

export default Pokelist