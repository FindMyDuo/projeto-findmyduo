import InputLabel from "@mui/material/InputLabel";

import { StyledSelect } from "./styles";
import { ISelect } from "./types";

const MySelect = ({ placeholder, list, label, register }: ISelect) => {
  return (
    <StyledSelect {...register}>
      <option value="">{placeholder}</option>
      {list.map((item: any) => {
        return (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        );
      })}
    </StyledSelect>
  );
};

export default MySelect;
