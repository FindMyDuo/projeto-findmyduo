import React, { createContext, useContext, useReducer, useState } from "react";
import { iChat, iChatContext } from "./types";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { AuthContext } from "../AuthContext/AuthContext";

export const ChatContext = createContext({} as iChatContext);

export const ChatContextProvider = ({ children }: iChat) => {
  const [searchName, setSearchName] = useState("");
  const [user, setUser] = useState(null as any);

  const { currentUser } = useContext(AuthContext);

  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (
    state: any,
    action: { type: any; payload: { uid: number } }
  ) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", searchName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitSearch = () => {
    handleSearch();
  };

  const handleKey = (e: { code: string }) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async (userUid: string) => {
    if (user === null) {
      const combinedId =
        currentUser.uid > userUid
          ? currentUser.uid + userUid
          : userUid + currentUser.uid;

      try {
        const res = await getDoc(doc(db, "chats", combinedId));

        if (!res.exists()) {
          await setDoc(doc(db, "chats", combinedId), { messages: [] });
          await updateDoc(doc(db, "userChats", currentUser.uid), {
            [combinedId + ".userInfo"]: {
              uid: user.uid,
              displayName: user.displayName,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
          await updateDoc(doc(db, "userChats", user.uid), {
            [combinedId + ".userInfo"]: {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const combinedId =
        currentUser.uid > user.uid
          ? currentUser.uid + user.uid
          : user.uid + currentUser.uid;

      try {
        const res = await getDoc(doc(db, "chats", combinedId));

        if (!res.exists()) {
          await setDoc(doc(db, "chats", combinedId), { messages: [] });
          await updateDoc(doc(db, "userChats", currentUser.uid), {
            [combinedId + ".userInfo"]: {
              uid: user.uid,
              displayName: user.displayName,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
          await updateDoc(doc(db, "userChats", user.uid), {
            [combinedId + ".userInfo"]: {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    setUser(null);
    setSearchName("");
  };

  return (
    <ChatContext.Provider
      value={{
        handleSelect,
        setSearchName,
        handleSubmitSearch,
        handleKey,
        user,
        data: state,
        dispatch
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
