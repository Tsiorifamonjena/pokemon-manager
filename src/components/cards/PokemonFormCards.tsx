import React from "react";
import {
  Card,
  CardContent,
  FormControl,
  TextField,
  SxProps,
  CardActions,
  Button,
  Box,
  InputAdornment,
} from "@mui/material";
import SelectPokemonTypeInput from "../input/SelectPokemonTypeInput";
import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router-dom";
import { Pokemon } from "../../app/services/api/types";
import { FormikProps } from "formik";

const texFieldStyle = {
  marginBottom: 5,
} as SxProps;

export type FormValues = Omit<Pokemon, "id">;

const PokemonFormCards: React.FC<{
  formik: FormikProps<FormValues>;
}> = ({ formik }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <CardContent>
          <TextField
            sx={texFieldStyle}
            value={formik.values.name}
            id="name"
            name="name"
            onChange={formik.handleChange}
            label="Nom"
            fullWidth
            required
            error={formik.touched.name && formik.errors.name !== ""}
          />
          <TextField
            sx={texFieldStyle}
            label="Image"
            fullWidth
            required
            value={formik.values.imageUrl}
            onChange={formik.handleChange}
            id="imageUrl"
            name="imageUrl"
            error={formik.touched.imageUrl && formik.errors.imageUrl !== ""}
          />
          <TextField
            sx={texFieldStyle}
            value={formik.values.description}
            onChange={formik.handleChange}
            label="Description"
            fullWidth
            required
            multiline
            rows={4}
            id="description"
            name="description"
            error={
              formik.touched.description && formik.errors.description !== ""
            }
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              sx={{ ...texFieldStyle, marginRight: 2 }}
              label="Taille"
              required
              value={formik.values.size}
              fullWidth
              onChange={formik.handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              id="size"
              name="size"
              error={formik.touched.size && formik.errors.size !== ""}
            />
            <TextField
              sx={{ ...texFieldStyle, marginLeft: 2 }}
              label="Poids"
              required
              value={formik.values.weight}
              fullWidth
              onChange={formik.handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kg</InputAdornment>
                ),
              }}
              id="weight"
              name="weight"
              error={formik.touched.weight && formik.errors.weight !== ""}
            />
          </Box>
          <FormControl fullWidth required>
            <InputLabel>Types</InputLabel>
            <SelectPokemonTypeInput
              value={formik.values.type}
              onChange={(e) => {
                const value = e.target.value as string;
                formik.setFieldValue("type", value);
              }}
              id="type"
              name="type"
              error={formik.touched.type && formik.errors.type !== ""}
            />
          </FormControl>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button size="small" onClick={() => navigate(-1)}>
            Retour
          </Button>
          <Button
            type="submit"
            size="small"
            disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
          >
            Enregistrer
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default PokemonFormCards;
