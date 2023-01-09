import { iLoginData } from "../../components/form/formLogin/types";
import { iRegisterData } from "../../components/form/formRegister/types";

export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUserContext {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  login: (data: iLoginData) => void;
  registerUser: (data: iRegisterData) => void;
}

export type iUser = {
  token: string;
  user: iUserResponse;
};
export type iUserResponse = {
  email: string;
  age: string;
  favoriteGames: [
    {
      name: string;
      genre: string;
    }
  ];
  socialMedia: string;
  id: number;
  name: string;
};
