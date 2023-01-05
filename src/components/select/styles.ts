import withStyles from "@material-ui/core/styles/withStyles";
import { FormControl } from "@mui/material";

export const FormStyled = withStyles({
  root: {
    backgroundColor: "#21232B",
    borderRadius: "4px",

    "&  label.MuiFormLabel-root": {
      color: "#A9AAB2",

      "& span.MuiFormLabel-asterisk": {
        color: "transparent",
      },
    },

    "& div fildset select": {
      color: "#A9AAB2",
    },

    "& select::placeholder": {
      color: "#A9AAB2",
    },

    "& label.Mui-focused": {
      color: "#A9AAB2",
    },
    "& .MuiSelect-underline:after": {
      borderBottomColor: "#21232B",
    },

    "& .MuiOutlinedSelect-root": {
      "& fieldset": {
        borderColor: "#21232B",
      },
      "&:hover fieldset": {
        border: "2px solid #21232B",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#0D81EC",
      },
    },
  },
})(FormControl);
