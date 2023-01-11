import logoIcon from "../../assets/aditionalIcons/logo-icon.svg";
import React, { useContext, useState } from "react";
import { tNavButton } from "./types";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { SlideClasses } from "./styles";
import { ModalProfileUser } from "../ModalUserProfile/modalUserProfile";
import { StyledMobileNavbar } from "./styles";
import { StyledChatIcon, StyledHomeIcon, StyledUserIcon } from "./styledIcons";

export const MobileNavBar = () => {
  const { user } = useContext(UserContext);
  const [button, setButton] = useState<tNavButton | null>(null);

  function handleClick(e: any) {
    const parent: any = (e.target as HTMLButtonElement).parentElement
      ?.parentElement;
    if (button !== e.target.value && e.target.value !== "") {
      if (parent.classList.contains("slide-down-navbar")) {
        parent.classList.remove("slide-down-navbar");
      }
      parent.classList.add("slide-up-navbar");
      setButton(e.target.value);
    } else if (button === e.target.value || e.target.value === "") {
      if (parent.classList.contains("slide-up-navbar")) {
        parent.classList.remove("slide-up-navbar");
      }
      parent.classList.add("slide-down-navbar");
      setButton(null);
    }
  }

  return (
    <>
      <StyledMobileNavbar>
        <div>
          <button value="" onClick={handleClick}>
            <StyledHomeIcon>Outlined</StyledHomeIcon>
          </button>
          <button value="chat" onClick={handleClick}>
            <StyledChatIcon>Outlined</StyledChatIcon>
          </button>
          <button value="users" onClick={handleClick}>
            <img src={logoIcon} alt="" />
          </button>
          <button value="profile" onClick={handleClick}>
            <StyledUserIcon>Outlined</StyledUserIcon>
          </button>
        </div>
        {button == "profile" ? <ModalProfileUser user={user} /> : null}
      </StyledMobileNavbar>
      <SlideClasses />
    </>
  );
};
