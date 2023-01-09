import React from "react";
import { HeaderStyled } from "./styles";
import logoHeader from "../../assets/logo-inline.svg";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  return (
    <HeaderStyled>
      <img src={logoHeader} alt="Logo Find my Duo" />
      <button title="Logout">
        <LogoutIcon sx={{ fontSize: 30 }} />
      </button>
    </HeaderStyled>
  );
};

export default Header;
