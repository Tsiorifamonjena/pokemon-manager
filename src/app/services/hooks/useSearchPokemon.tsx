import { useState, useEffect } from "react";
import { useGetPokemonsQuery } from "../api/pokemonApi";
import { Pokemon } from "../api/types";

type UseSearchPokemonHooksType = {
  pokemons: Pokemon[];
  isFetching: boolean;
};

export function useSearchPokemon(): UseSearchPokemonHooksType {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const { data, isLoading } = useGetPokemonsQuery();
  const [isFetching, setIsFetching] = useState<boolean>(isLoading);

  useEffect(() => {
    if (data) {
      setPokemons(data);
      setIsFetching(false);
    }
  }, [data]);

  return {
    pokemons,
    isFetching,
  };
}
