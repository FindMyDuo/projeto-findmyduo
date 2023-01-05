import { UseFormRegisterReturn } from "react-hook-form";

export interface ISelect {
  placeholder: string;
  list: any[];
  label: string;
  register?: UseFormRegisterReturn<string>;
}
