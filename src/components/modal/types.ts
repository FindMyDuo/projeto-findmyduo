import { Dispatch, SetStateAction } from "react";

interface IModal {
  setState: Dispatch<SetStateAction<boolean>>;
  title: string;
  state: boolean;
  children: React.ReactNode;
}

export default IModal;
