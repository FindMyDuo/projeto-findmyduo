import logo from "../../assets/logoDesktop.svg";
import logoIcon from "../../assets/aditionalIcons/logo-icon.svg";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { ModalProfileUser } from "../ModalUserProfile/modalUserProfile";
import { StyledDesktopNavbar } from "./styles";
import { useContext, useState } from "react";
import { StyledChatIcon, StyledHomeIcon, StyledUserIcon } from "./styledIcons";

export const DesktopNavBar = () => {
  const { user } = useContext(UserContext);
  const [showProfileModal, setProfileModal] = useState<boolean>(false);

  const handleProfileClick = () => {
    setProfileModal(true);
  };

  return (
    <>
      <StyledDesktopNavbar>
        <img className="logo" src={logo} alt="" />
        <div>
          <button>
            <StyledHomeIcon>Outlined</StyledHomeIcon>
            <h3>Home</h3>
          </button>
          <button>
            <StyledChatIcon>Outlined</StyledChatIcon>
            <h3>Chat</h3>
          </button>
          <button>
            <img src={logoIcon} alt="" />
            <h3>Usuários Global</h3>
          </button>
          <button>
            <StyledUserIcon>Outlined</StyledUserIcon>
            <h3>Perfil</h3>
          </button>
        </div>
      </StyledDesktopNavbar>
      {showProfileModal ? <ModalProfileUser user={user} /> : null}
    </>
  );
};
