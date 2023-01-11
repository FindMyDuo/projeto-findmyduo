import React from "react";
import { HeaderStyled } from "./styles";
import logoHeader from "../../assets/logo-inline.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export const Header = () => {
  return (
    <HeaderStyled>
      <img src={logoHeader} alt="Logo Find my Duo" />
      <button title="Logout" onClick={() => signOut(auth)}>
        <LogoutIcon sx={{ fontSize: 30 }} />
      </button>
    </HeaderStyled>
  );
};
