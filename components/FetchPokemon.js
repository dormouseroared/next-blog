import { useEffect, useState } from "react"

export default function FetchPokemon() {

    const [pokemon, setPokemon] = useState([])

    async function actualFetch() {
        const response = await fetch("https://dummydata.netlify.app/pokedex.json")

        const json = await response.json()

        setPokemon(json.pokemon)
    }

    // useEffect(() => {actualFetch()}, []) // comment this out to enable button

    if (pokemon.length <= 0) {
        return (
            <>
                <h1>There is no pokemon</h1>
                <button onClick={actualFetch} className="btn primary">Get Pokemon</button>
            </>
        )
    }





    return (
        <>
            <div className="text-5xl">FetchPokemon</div>
            {pokemon.map((item) => {
                return (
                    <>
                        <h2 key={item.id}>{item.name}</h2>
                        <img src={item.img} alt="pokemon" />
                    </>
                )
            })}
        </>
    )
}

// fetch the json
// convert it to a js object
// locate the array inside the object

// https://www.youtube.com/watch?v=RbWvTBm4yhM
