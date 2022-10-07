import { Grid } from "@mui/material";
import React from "react";
import { Pokemon } from "../../app/services/api/types";
import PokemonCards from "../cards/PokemonCards";

const PokemonList: React.FC<{
  pokemons: Pokemon[] | undefined;
}> = ({ pokemons }) => {
  return (
    <>
      {pokemons?.map((pokemon) => (
        <Grid item xs={4} key={pokemon.id}>
          <PokemonCards {...pokemon} />
        </Grid>
      ))}
    </>
  );
};

export default PokemonList;
