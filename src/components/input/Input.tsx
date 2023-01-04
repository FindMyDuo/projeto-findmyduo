import { useState } from "react";
import { iInput } from "./types";
import { BoxInput, CssTextField } from "./styles";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const Input = ({
  children,
  type,
  register,
  errorInput,
  placeHolder,
}: iInput) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <BoxInput>
      {type === "password" ? (
        <>
          <CssTextField
            error={errorInput ? true : false}
            required={(errorInput && false) || (!errorInput && true)}
            type={showPassword ? "text" : "password"}
            id="outlined-basic"
            variant="outlined"
            label={children}
            placeholder={placeHolder}
            {...register}
          />
          <i onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <VisibilityIcon color="primary" />
            ) : (
              <VisibilityOffIcon color="primary" />
            )}
          </i>
        </>
      ) : (
        <CssTextField
          error={errorInput ? true : false}
          required={(errorInput && false) || (!errorInput && true)}
          type={type}
          id="outlined-basic-1"
          label={children}
          variant="outlined"
          placeholder={placeHolder}
          {...register}
        />
      )}
    </BoxInput>
  );
};
