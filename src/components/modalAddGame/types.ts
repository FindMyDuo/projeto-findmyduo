import { Dispatch, SetStateAction } from "react";

export interface IModalAddGame {
  setState: Dispatch<SetStateAction<boolean>>;
}

export interface IGame {
  name: string;
  genre: string;
}

export interface INewGame {
  newGame: string;
}
