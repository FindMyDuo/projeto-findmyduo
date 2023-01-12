import React, { useContext, useEffect, useState } from "react";
import { ContainerMessages } from "./styles";
import { ChatContext } from "../../../contexts/ChatContext/ChatContext";
import noPicture from "../../../assets/noProfilePic.svg";
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from "../../../firebase/firebase";
import Message from "./Message";
import Input from "../inputChat/Input";
import { NavContext } from "../../../contexts/NavContext/NavContext";

const Messages = () => {
  const [messages, setMessages] = useState([] as any);
  const { setChat } = useContext(NavContext)
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);

  const handleClick = () => {
    setChat(false)
  }

  return (
    <ContainerMessages>
      <div>
        <div>
          <figure>
            <img src={noPicture} alt="" />
          </figure>
          <span>
            <p>{data.user?.displayName}</p>
            <img src="" alt="" />
          </span>
        </div>
        <button onClick={handleClick}>X</button>
      </div>

      <div>
        {messages.map((message: { id: React.Key | null | undefined }) => {
          return <Message message={message} key={message.id} />;
        })}
      </div>
      <Input />
    </ContainerMessages>
  );
};

export default Messages;
