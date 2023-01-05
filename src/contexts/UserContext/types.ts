export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUserContext {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}
