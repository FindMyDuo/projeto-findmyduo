import { Dispatch, SetStateAction } from "react";

export interface INewPost {
  title: string;
  content: string;
  userId?: string | undefined;
}
export interface ImodalNewPost {
  setState: Dispatch<SetStateAction<boolean>>;
}
