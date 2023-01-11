import styled from "styled-components";

export const TopBackGround = styled.div`
  min-height: 30vh;
  background-color: var(--gray6);
  width: 100%;
`;

export const BackGroundProfile = styled.div`
  width: 100%;
  height: max-content;
  min-height: 100vh;

  padding: 21px;

  background-color: var(--gray5);

  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;
`;

export const ProfilePicture = styled.figure`
  height: 167px;
  width: 167px;

  border-radius: 100%;

  position: absolute;
  top: -80px;

  margin-bottom: 20px;

  img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
`;

export const UserProfileInfo = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 50px;

  h2,
  h3 {
    color: var(--gray1);
    font-size: var(--font2);
  }
`;

export const UserFavoriteGamesTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h3 {
    color: var(--gray1);
  }
`;

export const UserFavoriteGames = styled.ul`
  display: flex;

  padding: 7px 7px 10px;
  margin-bottom: 26px;
  height: 75px;
  width: 100%;

  overflow-y: hidden;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 10px;
    height: 0.5px;
  }

  background-color: var(--gray3);

  border-radius: var(--radius1);

  img {
    height: 60px;
    width: 60px;

    margin-right: 24px;
  }
`;
