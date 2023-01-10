import Header from "../../components/header/header";
import ChatFeed from "../../components/chat/feed/ChatFeed";
import { tDevice } from "../../components/navbar/types";
import { HomeTopList } from "../../components/homeTopList/homeTopList";
import { UserPostCard } from "../../components/card/userPostCard/UserPostCard";
import { MobileNavBar } from "../../components/navbar/mobileNavbar";
import { useState, useEffect } from "react";
import { DesktopNavBar } from "../../components/navbar/desktopNavbar";
import { StyledGrid } from "./styles";

export const DashboardPage = () => {
  const [device, setDevice] = useState<tDevice>("desktop");
  const { innerWidth, innerHeight } = window;

  useEffect(() => {
    if (innerWidth > 991) {
      setDevice("mobile");
    } else {
      setDevice("desktop");
    }
  }, [innerWidth]);
  return (
    <>
      <StyledGrid />
      <Header />
      <HomeTopList />
      <UserPostCard />
      <MobileNavBar />
      <DesktopNavBar />
      {/* innerWidth > 991 ? <DesktopNavBar /> : <MobileNavBar /> */}
    </>
  );
};
