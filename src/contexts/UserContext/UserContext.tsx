import api from "../../services/axios";
import { useNavigate } from "react-router-dom";
import { iUser, iUserContext, iUserContextProps } from "./types";
import { useState, useEffect, createContext } from "react";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<iUser | null>({null});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
