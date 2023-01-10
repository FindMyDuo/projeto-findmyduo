import React, { useContext } from 'react';
import { StyledTopHome } from './styles';
import vava from '../../assets/GamesIcons/Valorant.svg';
import lol from '../../assets/GamesIcons/League of Legends.svg';
import joystick from '../../assets/joystick.svg';
import { Button } from '../button/Button';
import { UserContext } from '../../contexts/UserContext/UserContext';
import { GamesContext } from '../../contexts/GamesContext/GamesContext';
import { iAllGames } from '../../contexts/GamesContext/types';

export const HomeTopList = () => {
  const {user} = useContext(UserContext)
  const {allGames} = useContext(GamesContext)

  console.log(allGames);
  
  console.log(user);

  return (
    <>
      <StyledTopHome>
        <h2>Jogos:</h2>
        <ul>
          {allGames.map((element: iAllGames) => {
            return (
              <li>
                <figure>
                  <img src={element.img} alt="" />
                </figure>
              </li>
            );
          })}
        </ul>
        <div>
          <span>
            <img src={joystick} alt="" />
            {/* <h2>{allGames[0].}</h2> */}
          </span>
          <Button buttonType='searchUser' type='button'>Procurar DUO</Button>
        </div>
      </StyledTopHome>
    </>
  );
};
