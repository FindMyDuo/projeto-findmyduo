import React from "react";
import { GamesContextProvider } from "./GamesContext/GamesContext";
import { UserProvider } from "./UserContext/UserContext";
import { AuthContextProvider } from "./AuthContext/AuthContext";

interface iProvider {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProvider) => {
  return (
    <UserProvider>
      <AuthContextProvider>
        <GamesContextProvider>{children}</GamesContextProvider>
      </AuthContextProvider>
    </UserProvider>
  );
};