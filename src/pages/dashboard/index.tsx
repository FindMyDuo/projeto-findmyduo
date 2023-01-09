import { UserPostCard } from "../../components/card/userPostCard/UserPostCard";
import ChatFeed from "../../components/chat/feed/ChatFeed";
import Header from "../../components/header/Header";
import { HomeTopList } from "../../components/homeTopList/homeTopList";
import { NavBar } from "../../components/navbar/navbar";

export const DashboardPage = () => {
  return (
    <>
      <Header />
      <HomeTopList />
      <UserPostCard />
      <NavBar />
    </>
  );
};
