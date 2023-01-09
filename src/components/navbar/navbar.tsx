import logoIcon from "../../assets/aditionalIcons/logo-icon.svg";
import { SlideClasses } from "./styles";
import React, { useState } from "react";
import { StyledChatIcon, StyledHomeIcon, StyledUserIcon } from "./styledIcons";
import { StyledNavbar } from "./styles";
import { tNavButton } from "./types";

export const NavBar = () => {
  const [button, setButton] = useState<tNavButton | null>();

  const homeClick = (e: React.MouseEvent) => {
    //Redirect button
    const parent: any = (e.target as HTMLButtonElement).parentElement?.parentElement;
    if (parent.classList.contains("slide-up-navbar")) {
      parent.classList.add("slide-down-navbar");
      parent.classList.remove("slide-up-navbar");
      setButton(null);
    }
  };

  const chatClick = (e: React.MouseEvent) => {
    const parent: any = (e.target as HTMLButtonElement).parentElement?.parentElement;
    if (button !== "chat") {
      if (parent.classList.contains("slide-down-navbar")) {
        parent.classList.remove("slide-down-navbar");
      }
      parent.classList.add("slide-up-navbar");
      setButton("chat");
    } else if (button === "chat") {
      if (parent.classList.contains("slide-up-navbar")) {
        parent.classList.remove("slide-up-navbar");
      }
      parent.classList.add("slide-down-navbar");
      setButton(null);
    }
  };

  const profileClick = (e: React.MouseEvent) => {
    const parent: any = (e.target as HTMLButtonElement).parentElement?.parentElement;
    if (button !== "profile") {
      if (parent.classList.contains("slide-down-navbar")) {
        parent.classList.remove("slide-down-navbar");
      }
      parent.classList.add("slide-up-navbar");
      setButton("profile");
    } else if (button === "profile") {
      if (parent.classList.contains("slide-up-navbar")) {
        parent.classList.remove("slide-up-navbar");
      }
      parent.classList.add("slide-down-navbar");
      setButton(null);
    }
  };

  const globalClick = (e: React.MouseEvent) => {
    //Redirect button
    const parent: any = (e.target as HTMLButtonElement).parentElement?.parentElement;
    if (parent.classList.contains("slide-up-navbar")) {
      parent.classList.add("slide-down-navbar");
      parent.classList.remove("slide-up-navbar");
      setButton(null);
    }
  };

  return (
    <>
      <StyledNavbar>
        <div>
          <button onClick={homeClick}>
            <StyledHomeIcon>Outlined</StyledHomeIcon>
          </button>
          <button onClick={chatClick}>
            <StyledChatIcon>Outlined</StyledChatIcon>
          </button>
          <button onClick={globalClick}>
            <img src={logoIcon} alt="" />
          </button>
          <button onClick={profileClick}>
            <StyledUserIcon>Outlined</StyledUserIcon>
          </button>
        </div>
      </StyledNavbar>
      <SlideClasses />
    </>
  );
};
