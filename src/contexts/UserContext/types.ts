export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUserContext {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
}

export type iUser = {
  token: string;
  id: string;
}