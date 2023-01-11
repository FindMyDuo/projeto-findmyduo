import logo from "../../assets/logoDesktop.svg";
import logoIcon from "../../assets/aditionalIcons/logo-icon.svg";
import { tNavButton } from "./types";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { ModalProfileUser } from "../ModalUserProfile/modalUserProfile";
import { StyledDesktopNavbar } from "./styles";
import { useContext, useState } from "react";
import { StyledChatIcon, StyledHomeIcon, StyledUserIcon } from "./styledIcons";

export const DesktopNavBar = () => {
  const { user } = useContext(UserContext);
  const [button, setButton] = useState<tNavButton | null>(null);
  const [showProfileModal, setProfileModal] = useState<boolean>(false);

  function handleClick(e: any) {
    if (button !== e.target.value && e.target.value !== "") {
      setButton(e.target.value);
    } else if (button === e.target.value || e.target.value === "") {
      setButton(null);
    }
    checkModal();
  }

  function checkModal() {
    if (button === "profile") {
      setProfileModal(true);
    } else {
      setProfileModal(false);
    }

    console.log(showProfileModal)
  }

  return (
    <>
      <StyledDesktopNavbar>
        <img className="logo" src={logo} alt="" />
        <div>
          <button value="" onClick={handleClick}>
            <StyledHomeIcon>Outlined</StyledHomeIcon>
            <h3>Home</h3>
          </button>
          <button value="chat" onClick={handleClick}>
            <StyledChatIcon>Outlined</StyledChatIcon>
            <h3>Chat</h3>
          </button>
          <button value="users" onClick={handleClick}>
            <img src={logoIcon} alt="" />
            <h3>Usuários Global</h3>
          </button>
          <button value="profile" onClick={handleClick}>
            <StyledUserIcon>Outlined</StyledUserIcon>
            <h3>Perfil</h3>
          </button>
        </div>
      </StyledDesktopNavbar>
      {showProfileModal ? <ModalProfileUser user={user} /> : null}
    </>
  );
};
