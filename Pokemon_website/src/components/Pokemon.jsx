import { useEffect, useState } from "react";
import { PokemonCards } from "./Pokemon_cards";

export const Pokemon = () => {

    const [searchPokemon, setSearchName] = useState("");
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();

            const detailedPokemonData = data.results.map(async (currPokemon) => {
                const res = await fetch(currPokemon.url);
                const data = await res.json();
                return data;
            });

            setPokeData(await (Promise.all(detailedPokemonData)));
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            setLoading(false);
            setError(error);
        }
    }

    const searchData = pokeData.filter((currPokemon) =>
        currPokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
    );

    useEffect(() => {
        fetchPokemon();
    }, [])

    if (loading) {
        return (
            <div>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1>Error......</h1>
            </div>
        );
    }

    return (
        <>
            <h1 className="flex justify-center text-3xl font-bold m-2">
                Let's Catch Pokemon
            </h1>
            <div className="flex justify-center">
                <input
                    type="text"
                    autoComplete="off"
                    value={searchPokemon}
                    onChange={(e) => setSearchName(e.target.value)}
                    placeholder="Search Pokemon"
                    className="bg-slate-300 rounded-md m-4 pl-7 pr-7 pb-1 pt-1"
                />
            </div>

            <div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {
                        searchData.map((pokemon) =>
                            <li key={pokemon.id}>
                                <PokemonCards
                                    data={pokemon}
                                />
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    );
}