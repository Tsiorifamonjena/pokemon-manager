import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Pokemon } from "../../app/services/api/types";

const PokemonCards: React.FC<Pokemon> = ({
  name,
  imageUrl,
  description,
  size,
  weight,
  type,
}) => {
  return (
    <Card>
      <CardMedia component="img" image={imageUrl} alt={name} width={25} />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {name}
        </Typography>
        <p>{description}</p>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>Taille : {size} cm</div>
          <div>Poids : {weight} kg</div>
        </Box>
        <p>Type : {type}</p>
      </CardContent>
    </Card>
  );
};

export default PokemonCards;
