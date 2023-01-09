import React from 'react';
import {
  CardContainer,
  CardUserContact,
  CardUserInfo,
  StyledCard,
} from './styles';
import userImg from '../../../assets/userImg.svg';
import { Button } from '../../button/Button';
import { HiDotsVertical } from 'react-icons/hi';
import { TbMessage } from 'react-icons/tb';
import discordIcon from '../../../assets/discord.svg';
import { iUserPostCard } from './types';
import noUser from '../../../assets/noProfilePic.svg';

export const UserPostCard = () => {
  const userCard: Array<iUserPostCard> = [
    {
      id: 1,
      name: 'Andrea Souza',
      favoriteGames: 'Valorant',
      time: 'Agora',
      discord: 'https://www.youtube.com/',
      content: 'Alguém quer jogar um valorant comigo? :)',
    },
    {
      id: 2,
      img: userImg,
      name: 'Andrea Souza',
      favoriteGames: 'Valorant',
      time: 'Agora',
      content: 'Alguém quer jogar um valorant comigo? :)',
    },
  ];

  return (
    <CardContainer>
      {userCard.map((element) => {
        return (
          <StyledCard key={element.id}>
            <CardUserInfo>
              <div>
                <figure>
                  {element.img ? (
                    <img title='userPostImg' src={element.img} />
                  ) : (
                    <img title='userPostImg' src={noUser} />
                  )}
                </figure>
                <section>
                  <h3>{element.name}</h3>
                  <span>{element.favoriteGames + ' | '}</span>
                  <span>{element.time}</span>
                </section>
              </div>
              <Button
                buttonType="smallIcon"
                type="button"
                onClick={() => console.log('o')}
              >
                <HiDotsVertical />
              </Button>
            </CardUserInfo>
            <CardUserContact>
              <p>{element.content}</p>
              <div>
                <Button
                  buttonType="smallIcon"
                  type="button"
                  onClick={() => console.log('Ir para o discord')}
                >
                  {element.discord ? <img src={discordIcon} alt="" /> : <></>}
                </Button>
                <Button
                  buttonType="smallIcon"
                  type="button"
                  onClick={() => console.log('Abir chat')}
                >
                  <TbMessage />
                </Button>
              </div>
            </CardUserContact>
          </StyledCard>
        );
      })}
    </CardContainer>
  );
};
