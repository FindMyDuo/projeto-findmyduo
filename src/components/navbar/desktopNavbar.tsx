import logo from "../../assets/logoDesktop.svg";
import logoIcon from "../../assets/aditionalIcons/logo-icon.svg";
import React, { useEffect, useState } from "react";
import { SlideClasses } from "./styles";
import { StyledChatIcon, StyledHomeIcon, StyledUserIcon } from "./styledIcons";
import { tDevice, tNavButton } from "./types";
import { StyledDesktopNavbar } from "./styles";

export const DesktopNavBar = () => {
  return (
    <>
      <StyledDesktopNavbar>
        <img className="logo" src={logo} alt="" />
        <div>
          <button>
            <StyledHomeIcon>Outlined</StyledHomeIcon><h3>Home</h3>
          </button>
          <button>
            <StyledChatIcon>Outlined</StyledChatIcon><h3>Chat</h3>
          </button>
          <button>
            <img src={logoIcon} alt="" /><h3>Usuários Global</h3>
          </button>
          <button>
            <StyledUserIcon>Outlined</StyledUserIcon><h3>Perfil</h3>
          </button>
        </div>
      </StyledDesktopNavbar>
    </>
  );
};
