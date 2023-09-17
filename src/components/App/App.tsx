import React, { useEffect, useState } from 'react'
import './App.css';
import Pokemon from '../pokemon/Pokemon';
import { pokemonData } from '../../data/PokemonData';
import { pokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from '../../PokemonSchema';



const App  = ()  => {
    

const [allPokemons,setAllPokemons] =useState<pokemonSchema[]>([])
const [searchedPokemons,setSearchedPokemons] =useState<pokemonSchema[]>([])
const [selectedPokemons,setSelectedPokemons] =useState<pokemonSchema | undefined>()

const handleInputChange = (inputValue:string)=>{
    
    const searchedPokemons= allPokemons.filter((pokemon:pokemonSchema)=>{
        return(
            pokemon.name && pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
        )
    }) 

    setSearchedPokemons(searchedPokemons)
    
}
useEffect(()=>{
    
    
    const patchedPokemons:pokemonSchema[]=patchPokemonData(pokemonData)
    setAllPokemons(patchedPokemons)
    setSearchedPokemons(patchedPokemons)

   
 /*    setAllPokemons(patchedPokemons)
    setSearchedPokemons(patchedPokemons) */
   
},[])
const patchPokemonData =(pokemons:UnpatchedPokemonSchema[]):pokemonSchema[]=>{
const patchedPokemons:pokemonSchema[] = pokemons.map((pokemon)=>{
   let parsedSprites :PokemonSpritesSchema={
    normal:undefined,
    animated:undefined
   }
   try{
    parsedSprites= pokemon.sprites && JSON.parse(pokemon.sprites)
   }catch(e){
    
    
   }
   const patchPokemon:pokemonSchema ={
    ...pokemon,
    sprites:parsedSprites
   }
   return patchPokemon
})
return patchedPokemons
}

const handleSelectedPokemon = (pokemonName:string) => {
    const selectedPokemon = allPokemons.find((pokemon:pokemonSchema)=>pokemon.name === pokemonName)
    setSelectedPokemons(selectedPokemon)
}

  return (
    <div className='bod'>
                 <h1>The Pokemon Book</h1>
                 <Pokemon searchedPokemons={searchedPokemons} onInputChange={handleInputChange}  selectedPokemon={selectedPokemons} onPokemonClick={handleSelectedPokemon}   />
             </div>
  )
}

export default App
/* class App extends React.Component<any,AppState>     {
    
    render(){ */
       
       /*  return ( */
            /*  componentDidMount(){
                 const pokemon-data=pokemonData 
             }*/
           
  /*          )
    }
 
}

export default App */