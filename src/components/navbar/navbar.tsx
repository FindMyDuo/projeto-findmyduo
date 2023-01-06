import logoIcon from "../../assets/aditionalIcons/logo-icon.svg";
import { StyledChatIcon, StyledHomeIcon, StyledUserIcon } from "./styledIcons";
import { StyledNavbar } from "./styles";

export const NavBar = () => {
  return (
    <>
      <StyledNavbar>
        <button>
          <StyledHomeIcon>Outlined</StyledHomeIcon>
        </button>
        <button>
          <StyledChatIcon>Outlined</StyledChatIcon>
        </button>
        <button>
          <img src={logoIcon} alt="" />
        </button>
        <button>
          <StyledUserIcon>Outlined</StyledUserIcon>
        </button>
      </StyledNavbar>
    </>
  );
};
