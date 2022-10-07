import React from "react";
import Select, { SelectProps } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { PokemonType } from "../../app/services/api/types";

const SelectPokemonTypeInput: React.FC<SelectProps> = (props) => {
  return (
    <Select {...props}>
      {Object.values(PokemonType).map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectPokemonTypeInput;
