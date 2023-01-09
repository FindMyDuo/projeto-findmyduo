import { Dispatch, SetStateAction } from "react";

interface IUser {
  email: string;
  name: string;
  age: string;
  favoriteGames: IGame[];
  socialMedia: string;
  id: number;
  url: string;
}

export interface IGame {
  name: string;
  genre: string;
}

export interface IModalProfile {
  user: IUser;
  setState: Dispatch<SetStateAction<boolean>>;
}
