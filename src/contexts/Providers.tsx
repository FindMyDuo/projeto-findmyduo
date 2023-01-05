import React from "react";
import { UserProvider } from "./UserContext/UserContext"

interface iProvider {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProvider) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
};
