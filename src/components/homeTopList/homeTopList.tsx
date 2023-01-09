import React from 'react';
import { StyledTopHome } from './styles';
import vava from '../../assets/GamesIcons/Valorant.svg';
import lol from '../../assets/GamesIcons/League of Legends.svg';
import joystick from '../../assets/joystick.svg';
import { Button } from '../button/Button';

export const HomeTopList = () => {
  const mocGames = [
    {
      gameImg: vava,
      gameName: 'Valorant',
    },
    {
      gameImg: lol,
      gameName: 'Valorant',
    },
  ];

  return (
    <>
      <StyledTopHome>
        <h2>Jogos:</h2>
        <ul>
          {mocGames.map((element) => {
            return (
              <li>
                <figure>
                  <img src={element.gameImg} alt="" />
                </figure>
              </li>
            );
          })}
        </ul>
        <div>
          <span>
            <img src={joystick} alt="" />
            <h2>{mocGames[0].gameName}</h2>
          </span>
          <Button buttonType='searchUser' type='button'>Procurar DUO</Button>
        </div>
      </StyledTopHome>
    </>
  );
};
