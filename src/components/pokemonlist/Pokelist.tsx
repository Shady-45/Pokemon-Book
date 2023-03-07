import React from 'react'
import Pokecard from '../pokemon-card/Pokecard'
import "./Pokelist.css"

const Pokelist = () => {
  return (
    <div className='pokemon-list'>
     <Pokecard name='Pikachu'/>
     <Pokecard name='Pikachu'/>
     <Pokecard name='Pikachu'/>
     <Pokecard name='Pikachu'/>
    </div>
  )
}

export default Pokelist