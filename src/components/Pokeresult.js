import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"

export default function Pokeresult() {
  const [pokemon, setPokemon] = useState({
    name: "bulbasaur",
    id: 1,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    abilities: ["overgrow", "chlorophyll"],
    height: 7,
    weight: 69
  })

    let {id} = useParams()
   
  useEffect(() => {
    let endpoint = `https://pokeapi.co/api/v2/pokemon/${id}`
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      setPokemon({
        name: data.name,
        id: data.id,
        image:  data.sprites.front_default,
        abilities: data.abilities.map(a => a.ability.name),
        height: data.height,
        weight: data.weight
      })

    })
    .catch(err => console.log(err))
  }, [id])

  console.log(pokemon)
  return (
    <div>
      <h1>{pokemon.name} #{pokemon.id}</h1>
      <div>
        <img src={pokemon.image} alt={pokemon.name}/>
      </div>
      <ul>
        <li>Abilities: {pokemon.abilities.join(" | ")}</li>
        <li>Weight: {pokemon.weight}</li>
        <li>Height: {pokemon.height}</li>
      </ul>
    </div>
  )
}
