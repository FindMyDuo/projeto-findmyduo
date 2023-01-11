import logoIcon from "../../assets/aditionalIcons/logo-icon.svg";
import React, { useContext, useState } from "react";
import { tNavButton } from "./types";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { SlideClasses } from "./styles";
import { ModalProfileUser } from "../ModalUserProfile/modalUserProfile";
import { StyledMobileNavbar } from "./styles";
import { StyledChatIcon, StyledHomeIcon, StyledUserIcon } from "./styledIcons";
import ChatFeed from "../chat/feed/ChatFeed";
import { NavContext } from "../../contexts/NavContext/NavContext";

export const MobileNavBar = () => {
  const { user } = useContext(UserContext);
  const { nav, setNav } = useContext(NavContext);

  function handleClick(e: React.MouseEvent) {
    const parent: HTMLElement | null | undefined = (e.target as HTMLButtonElement).parentElement
      ?.parentElement;
    if (nav !== e.target.value && e.target.value !== "") {
      if (parent.classList.contains("slide-down-navbar")) {
        parent.classList.remove("slide-down-navbar");
      }
      parent.classList.add("slide-up-navbar");
      setNav(e.target.value);
    } else if (nav === e.target.value || e.target.value === "") {
      if (parent.classList.contains("slide-up-navbar")) {
        parent.classList.remove("slide-up-navbar");
      }
      parent.classList.add("slide-down-navbar");
      setNav(null);
    }
  }

  return (
    <>
      <SlideClasses />
      <StyledMobileNavbar>
        <div>
          {nav === null ? (
            <button className="active-button" value="" onClick={handleClick}>
              <StyledHomeIcon>Outlined</StyledHomeIcon>
            </button>
          ) : (
            <button value="" onClick={handleClick}>
              <StyledHomeIcon>Outlined</StyledHomeIcon>
            </button>
          )}
          {nav === "chat" ? (
            <button
              className="active-button"
              value="chat"
              onClick={handleClick}
            >
              <StyledChatIcon>Outlined</StyledChatIcon>
            </button>
          ) : (
            <button value="chat" onClick={handleClick}>
              <StyledChatIcon>Outlined</StyledChatIcon>
            </button>
          )}
          {nav === "users" ? (
            <button
              className="active-button"
              value="users"
              onClick={handleClick}
            >
              <img src={logoIcon} alt="" />
            </button>
          ) : (
            <button value="users" onClick={handleClick}>
              <img src={logoIcon} alt="" />
            </button>
          )}
          {nav === "profile" ? (
            <button
              className="active-button"
              value="profile"
              onClick={handleClick}
            >
              <StyledUserIcon>Outlined</StyledUserIcon>
            </button>
          ) : (
            <button value="profile" onClick={handleClick}>
              <StyledUserIcon>Outlined</StyledUserIcon>
            </button>
          )}
        </div>
        {nav === "profile" ? <ModalProfileUser user={user} /> : null}
        {nav === "chat" ? <ChatFeed /> : null}
      </StyledMobileNavbar>
    </>
  );
};
