import LogoutIcon from "@mui/icons-material/Logout";
import logoHeader from "../../assets/logo-inline.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { HeaderStyled } from "./styles";

const Header = () => {
  const { logout } = useContext(UserContext);
  const location: string = `${window.location}`;

  return (
    <HeaderStyled>
      <img src={logoHeader} alt="Logo Find my Duo" />
      {location.includes("/dashboard") ? (
        <button title="Logout">
          <LogoutIcon sx={{ fontSize: 30 }} onClick={() => logout()} />
        </button>
      ) : null}
    </HeaderStyled>
  );
};

export default Header;
