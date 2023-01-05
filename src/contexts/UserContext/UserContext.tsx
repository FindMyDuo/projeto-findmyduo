import api from "../../services/axios";
import { useNavigate } from "react-router-dom";
import { iUserContext, iUserContextProps } from "./types";
import { useState, useEffect, createContext } from "react";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token: string | null = localStorage.getItem("@TOKEN");
    if (token) {
      setToken(token);
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }, []);

  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
