import React from "react";
import { Container, Typography } from "@mui/material";
import PokemonFormCards, {
  FormValues,
} from "../../components/cards/PokemonFormCards";
import { usePostPokemonsMutation } from "../../app/services/api/pokemonApi";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { PokemonType } from "../../app/services/api/types";
import { useFormik } from "formik";

const initialValues: FormValues = {
  name: "",
  description: "",
  imageUrl: "",
  size: 0,
  weight: 0,
  type: "",
};

const PokemonTypes = Object.values(PokemonType);

const schemaValidator = Yup.object({
  name: Yup.string().required(),
  description: Yup.string().required(),
  imageUrl: Yup.string().required(),
  size: Yup.number().required(),
  weight: Yup.number().required(),
  type: Yup.string().oneOf(PokemonTypes).required(),
});

const AddPokemonPage: React.FC = () => {
  const [postPokemon] = usePostPokemonsMutation();
  const navigate = useNavigate();
  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema: schemaValidator,
    onSubmit: async ({ name, description, imageUrl, size, weight, type }) => {
      await postPokemon({
        name,
        description,
        imageUrl,
        size,
        weight,
        type,
      }).unwrap();
      navigate("/");
    },
  });

  return (
    <Container>
      <Typography variant="h6" sx={{ paddingY: 3, fontWeight: 700 }}>
        Nouveau Pokémon
      </Typography>
      <PokemonFormCards formik={formik} />
    </Container>
  );
};

export default AddPokemonPage;
