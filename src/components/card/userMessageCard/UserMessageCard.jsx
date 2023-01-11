import React from "react";
import userImg from "../../../assets/userImg.svg";
import noPicture from "../../../assets/noProfilePic.svg";
import {
  MessageCounter,
  StyledUserMessageCard,
  UserMessageContact,
  UserMessageContainer,
} from "./styles";

export const UserMessageCard = ({ userInfo, select }) => {

  return (
    <UserMessageContainer>
      {Object.entries(userInfo)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((element) => (
          <StyledUserMessageCard
            key={element[0]}
            onClick={() => select(element[1].userInfo)}
          >
            <UserMessageContact>
              <figure>
                {element.img ? (
                  <img src={element.img} alt="" />
                ) : (
                  <img src={noPicture} alt="" />
                )}
              </figure>
              <div>
                <h3>{element[1].userInfo.displayName}</h3>
                <p>{element[1].lastMessage?.text}</p>
              </div>
            </UserMessageContact>
            <MessageCounter>
              <p>20min</p>
              <span>1</span>
            </MessageCounter>
          </StyledUserMessageCard>
        ))}
    </UserMessageContainer>
  );
};
