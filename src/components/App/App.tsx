import React, { useEffect, useState } from 'react'
import './App.css';
import Pokemon from '../pokemon/Pokemon';
import { pokemonData } from '../../data/PokemonData';
import { pokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from '../../PokemonSchema';

interface AppState{
    searchFeild:string,
    allPokemons:pokemonSchema[],
    searchedPokemons:pokemonSchema[],
    selectedPokemons: pokemonSchema | undefined
}


const App  = ()  => {
    useEffect(()=>{
        const pokemndata = pokemonData
        console.log(pokemndata);
        const patchedPokemons:pokemonSchema[]=patchPokemonData(pokemonData)
        setAllPokemons(patchedPokemons)
     /*    setAllPokemons(patchedPokemons)
        setSearchedPokemons(patchedPokemons) */
       
    },[])
    const [searchFeild,setSearchFeild]=useState('')
const [allPokemons,setAllPokemons] =useState([])
const [searchedPokemons,setSearchedPokemons] =useState([])
const [selectedPokemons,setSelectedPokemons] =useState(undefined)

const patchPokemonData =(pokemons:UnpatchedPokemonSchema[]):pokemonSchema[]=>{
const patchedPokemons = pokemons.map((pokemon)=>{
   let parsedSprites :PokemonSpritesSchema={
    normal:undefined,
    animated:undefined
   }
   try{
    parsedSprites= pokemon.sprites && JSON.parse(pokemon.sprites)
   }catch(e){
    console.log(e);
    
   }
   const patchPokemon:pokemonSchema ={
    ...pokemon,
    sprites:parsedSprites
   }
   return patchPokemon
})
return patchedPokemons
}
  return (
    <div className='bod'>
                 <h1>The Pokemon Book</h1>
                 <Pokemon/>
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