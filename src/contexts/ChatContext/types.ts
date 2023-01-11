import React, { Dispatch, SetStateAction } from "react";

export interface iChatContext {
  handleSelect: (userUid: string) => void;
  setSearchName: Dispatch<SetStateAction<string>>;
  handleSubmitSearch: () => void;
  handleKey: (e: { code: string }) => void;
  user: any;
  data: any;
  dispatch: Dispatch<{ type: any; payload: { uid: number } }>;
}

export interface iChat {
  children: React.ReactNode;
}
