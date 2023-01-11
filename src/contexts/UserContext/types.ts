import { iLoginData } from "../../components/form/formLogin/types";
import { iRegisterData } from "../../components/form/formRegister/types";
import { Dispatch, SetStateAction } from "react";

export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUserContext {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  login: (data: iLoginData) => void;
  registerUser: (data: iRegisterData) => void;
  posts: iPost[];
  filterUsers: (id: string) => iUserResponse | undefined;
  setLoadingGames: Dispatch<SetStateAction<boolean>>;
  filteredPosts: iPost[];
  setFilterPosts: Dispatch<SetStateAction<string>>;
  logout: () => void;
  setObserver: Dispatch<SetStateAction<boolean>>;
}

export interface iPost {
  content: string;
  id: number;
  title: string;
  userId: string;
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
  url: string;
};
