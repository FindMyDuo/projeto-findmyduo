import React from "react";
import { ContainerChatFeed } from "./styles";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Search from "../../search/Search";
import noPicture from "../../../assets/noProfilePic.svg";
import { UserMessageCard } from "../../card/userMessageCard/UserMessageCard";

const ChatFeed = () => {
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
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
        </div>
      </div>
    </ContainerChatFeed>
  );
};

export default ChatFeed;
