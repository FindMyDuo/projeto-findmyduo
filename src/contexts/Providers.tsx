import React from "react";
import { GamesContextProvider } from "./GamesContext/GamesContext";
import { UserProvider } from "./UserContext/UserContext";
import { AuthContextProvider } from "./AuthContext/AuthContext";
import { ChatContextProvider } from "./ChatContext/ChatContext";

interface iProvider {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProvider) => {
  return (
    <UserProvider>
      <AuthContextProvider>
        <ChatContextProvider>
          <GamesContextProvider>{children}</GamesContextProvider>
        </ChatContextProvider>
      </AuthContextProvider>
    </UserProvider>
  );
};
