import { DiscordButton, StyledDiv, StyledLink } from "./styles";
import { IModalProfile, IGame } from "./types";

import chat from "../../assets/chat.svg";
import discord from "../../assets/discord.svg";

import CSGO from "../../assets/GamesIcons/CSGO.svg";
import Valorant from "../../assets/GamesIcons/Valorant.svg";
import PUBG from "../../assets/GamesIcons/PUBG.svg";
import Fortnite from "../../assets/GamesIcons/Fortnite.svg";

const gameImage: { [key: string]: string } = {
  CSGO: CSGO,
  Valorant: Valorant,
  PUBG: PUBG,
  Fortnite: Fortnite,
};

const ModalProfileUser = ({ user }: IModalProfile) => {
  return (
    <StyledDiv>
      <div>
        <img src={user.url} alt={user.name} />
      </div>
      <h2>{user.name}</h2>

      <h3>Jogos Favoritos</h3>

      <div>
        {user.favoriteGames.map((game: IGame) => {
          return (
            <img key={game.name} src={gameImage[game.name]} alt={game.name} />
          );
        })}
      </div>

      <StyledLink to="/*">
        <img src={chat} alt="Chat" />
      </StyledLink>
      <DiscordButton
        onClick={() => {
          navigator.clipboard.writeText(user.socialMedia);
        }}
      >
        <img src={discord} alt="Discord" />
      </DiscordButton>
    </StyledDiv>
  );
};

export default ModalProfileUser;
