import React from 'react';
import {
  BackGroundProfile,
  ProfilePicture,
  TopBackGround,
  UserFavoriteGames,
  UserFavoriteGamesTitle,
  UserProfileInfo,
} from './styles';
import noUserPic from '../../assets/noProfilePic.svg';
import vava from '../../assets/vava.svg';
import { Button } from '../button/Button';
import { RiUserUnfollowFill } from 'react-icons/ri';
import { RxExit } from 'react-icons/rx';

export const Profile = () => {

  return (
    <>
      <TopBackGround />
      <BackGroundProfile>
        <ProfilePicture>
          <img src={noUserPic} alt="" />
        </ProfilePicture>
        <UserProfileInfo>
          <h2>Player 01</h2>
          <h3>Player Name#Discord</h3>
          <Button
            buttonType="searchUser"
            type="button"
          >
            Editar usuário
          </Button>
        </UserProfileInfo>
        <UserFavoriteGamesTitle>
          <h3>Jogos favoritos</h3>
          <Button buttonType="smallIcon" type="button">
            +
          </Button>
        </UserFavoriteGamesTitle>
        <UserFavoriteGames>
          <li>
            <img src={vava} alt="" />
          </li>
        </UserFavoriteGames>
        <Button buttonType="exclueProfile" type="button">
          <>
            Excluir Conta
            <RiUserUnfollowFill />
          </>
        </Button>
        <br />
        <Button buttonType="logout" type="button">
          <>
            Logout
            <RxExit />
          </>
        </Button>
      </BackGroundProfile>
    </>
  );
};
