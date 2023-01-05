import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { FormStyled } from "./styles";
import { ISelect } from "./types";

const MySelect = ({ placeholder, list, label, register }: ISelect) => {
  const [value, setValue] = useState<string | number>("");

  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    setValue(event.target.value);
  };

  return (
    <FormStyled fullWidth>
      <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
      <Select
        {...register}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>{placeholder}</em>
        </MenuItem>
        {list.map((item: any) => {
          return (
            <MenuItem key={item.name} value={item}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormStyled>
  );
};

export default MySelect;
