import { Container, Grid } from "@mui/material";
import React from "react";
import { useSearchPokemon } from "../../app/services/hooks/useSearchPokemon";
import PokemonList from "../../components/list/PokemonList";
import FetchingPokemonListSkeleton from "../../components/skeleton/FetchingPokemonListSkeleton";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";

const fabStyle = {
  position: "fixed",
  bottom: 16,
  right: 16,
};

const HomePage: React.FC = () => {
  const { pokemons, isFetching } = useSearchPokemon();
  const navigate = useNavigate();

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="baseline" spacing={2}>
        {isFetching ? (
          <FetchingPokemonListSkeleton />
        ) : (
          <PokemonList pokemons={pokemons} />
        )}
      </Grid>
      <Fab sx={fabStyle} color="primary" onClick={() => navigate("/add")}>
        {<AddIcon />}
      </Fab>
    </Container>
  );
};

export default HomePage;
