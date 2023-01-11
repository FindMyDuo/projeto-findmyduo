import React, { useContext, useEffect, useState } from "react";
import { ContainerChatFeed } from "./styles";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Search from "../../search/Search";
import noPicture from "../../../assets/noProfilePic.svg";
import { UserMessageCard } from "../../card/userMessageCard/UserMessageCard";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import { ChatContext } from "../../../contexts/ChatContext/ChatContext";
import { DocumentData, doc, onSnapshot } from "@firebase/firestore";
import { db } from "../../../firebase/firebase";

const ChatFeed = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, "userChats", currentUser.uid),
        (doc) => {
          if (doc) {
            setChats(doc.data());
          }
        }
      );

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  return (
    <ContainerChatFeed>
      <div>
        <div>
          <h1>Chat</h1>
          <button title="Exit">
            <KeyboardReturnIcon color="primary" fontSize="large" />
          </button>
        </div>
        <Search />
      </div>

      <div>
        <h3>Recentes</h3>
        <div>
          <figure>
            <img src={noPicture} alt="" />
          </figure>
          <figure>
            <img src={noPicture} alt="" />
          </figure>
          <figure>
            <img src={noPicture} alt="" />
          </figure>
          <figure>
            <img src={noPicture} alt="" />
          </figure>
          <figure>
            <img src={noPicture} alt="" />
          </figure>
          <figure>
            <img src={noPicture} alt="" />
          </figure>
        </div>
      </div>

      <div>
        <h3>Messagens</h3>
        <div>
          <UserMessageCard userInfo={chats} select={handleSelect} />
        </div>
      </div>
    </ContainerChatFeed>
  );
};

export default ChatFeed;
