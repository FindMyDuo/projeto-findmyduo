import React from 'react';
import { GamesContextProvider } from './GamesContext/GamesContext';
import { UserProvider } from './UserContext/UserContext';

interface iProvider {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProvider) => {
  return (
    <UserProvider>
      <GamesContextProvider>{children}</GamesContextProvider>
    </UserProvider>
  );
};
