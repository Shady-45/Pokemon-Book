import React from 'react'
import './Pokecard.css'


interface PokemonCardProps{
  name:string,
  spritUrl?:string,
  onPokemonClick :(inputValue:string)=>void,
}
const Pokecard = ({name,spritUrl,onPokemonClick}: PokemonCardProps) => {
  return (
    <div className='pokecard' onClick={()=>onPokemonClick(name)}>
      <img className='pokecard-image' src={spritUrl} alt="" />
   <p>{name}</p>
    </div>
  )
}

export default Pokecard