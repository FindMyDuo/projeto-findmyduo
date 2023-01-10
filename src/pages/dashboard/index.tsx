import Header from "../../components/header/header";
import ChatFeed from "../../components/chat/feed/ChatFeed";
import React, { useState, useEffect } from "react";
import { tDevice } from "../../components/navbar/types";
import { HomeTopList } from "../../components/homeTopList/homeTopList";
import { UserPostCard } from "../../components/card/userPostCard/UserPostCard";
import { MobileNavBar } from "../../components/navbar/mobileNavbar";
import { DesktopNavBar } from "../../components/navbar/desktopNavbar";
import { StyledGrid } from "./styles";

export const DashboardPage = () => {
  const [device, setDevice] = useState<tDevice>("desktop");
  const { innerWidth, innerHeight } = window;

  /*   const observer = React.useRef(
    new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      console.log(width);
      setDevice("desktop")
    })
  );
 */

  return (
    <>
      <StyledGrid />
      <Header />
      <HomeTopList />
      <UserPostCard />
      <MobileNavBar />
      <DesktopNavBar />
      {/* device === "desktop" ? <DesktopNavBar /> : <MobileNavBar /> */}
    </>
  );
};
