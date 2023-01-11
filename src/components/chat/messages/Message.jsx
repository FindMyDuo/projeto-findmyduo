import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import { ChatContext } from "../../../contexts/ChatContext/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div className={`message ${message.senderId === currentUser.uid && "owner"}`}>
      <div>
        <p>{message.text}</p>
        <span>{new Date(message.date * 1000).toLocaleTimeString()}</span>
        {message.image && <img
          src={message.image}
          alt=""
        />}
      </div>
    </div>
  );
};

export default Message;
