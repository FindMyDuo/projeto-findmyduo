import { Dispatch, SetStateAction } from "react";

export interface IPost {
  title: string;
  content: string;
  userId?: string | undefined;
  id: number;
}

export interface IModalEdit {
  post: IPost;
  setState: Dispatch<SetStateAction<boolean>>;
}
