import React, { useContext } from "react";
import { HeaderStyled } from "./styles";
import logoHeader from "../../assets/logo-inline.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserContext } from "../../contexts/UserContext/UserContext";

const Header = () => {
    const { logout } = useContext(UserContext);
    return (
        <HeaderStyled>
            <img src={logoHeader} alt="Logo Find my Duo" />
            <button title="Logout">
                <LogoutIcon sx={{ fontSize: 30 }} onClick={() => logout()} />
            </button>
        </HeaderStyled>
    );
};

export default Header;
