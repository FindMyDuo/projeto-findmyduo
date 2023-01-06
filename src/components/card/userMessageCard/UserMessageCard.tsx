import React from 'react';
import userImg from '../../../assets/userImg.svg';
import noPicture from '../../../assets/noProfilePic.svg';
import {
  MessageCounter,
  StyledUserMessageCard,
  UserMessageContact,
  UserMessageContainer,
} from './styles';
import { iUserMessageCard } from './types';

export const UserMessageCard  = () => {
  const messageMoc : Array <iUserMessageCard> = [
    {
      id: 1,
      img: userImg,
      name: 'Sara Souza',
      content: 'Oi gatinho, me dá skin? rsrs queria te conhecer melhor!',
    },
    {
      id: 2,

      name: 'Sara Souza',
      content: 'Oi gatinho, me dá skin? rsrs queria te conhecer melhor!',
    },
  ];

  return (
    <UserMessageContainer>
      {messageMoc.map((element: iUserMessageCard) => {
        return (
          <StyledUserMessageCard key={element.id}>
            <UserMessageContact>
              <figure>
                {element.img ? (
                  <img src={element.img} alt="" />
                ) : (
                  <img src={noPicture} alt="" />
                )}
              </figure>
              <div>
                <h3>{element.name}</h3>
                <p>{element.content}</p>
              </div>
            </UserMessageContact>
            <MessageCounter>
              <p>20min</p>
              <span>1</span>
            </MessageCounter>
          </StyledUserMessageCard>
        );
      })}
    </UserMessageContainer>
  );
};
