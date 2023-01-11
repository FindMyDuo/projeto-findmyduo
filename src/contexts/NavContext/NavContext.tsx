import api from "../../services/axios";
import { useState, useEffect, createContext } from "react";
import { iNav, iNavChildren, tNav } from "./types";

export const NavContext = createContext({} as iNav);

export const NavContextProvider = ({ children }: iNavChildren) => {
  const [nav, setNav] = useState<tNav | null>(null);

  return (
    <NavContext.Provider value={{ nav, setNav }}>
      {children}
    </NavContext.Provider>
  );
};
