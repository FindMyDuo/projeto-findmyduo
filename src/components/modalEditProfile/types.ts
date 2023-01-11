import { Dispatch, SetStateAction } from "react";

export interface IProfile {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  socialMedia: string;
  url: string;
}

export interface IEditProfile {
  setState: Dispatch<SetStateAction<boolean>>
}
