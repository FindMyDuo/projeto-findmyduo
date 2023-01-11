import InputLabel from "@mui/material/InputLabel";
import { iSelect } from "./types";
import { StyledSelect } from "./styles";

const MySelect = ({ placeholder, list, label, register }: iSelect) => {
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
