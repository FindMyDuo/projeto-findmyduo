import React from "react";
import { HeaderStyled } from "./styles";
import logoHeader from "../../assets/logo-inline.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    signOut(auth);
    navigate("/");
  };

  return (
    <HeaderStyled>
      <img src={logoHeader} alt="Logo Find my Duo" />
      <button title="Logout" onClick={handleLogout}>
        <LogoutIcon sx={{ fontSize: 30 }} />
      </button>
    </HeaderStyled>
  );
};

export default Header;
