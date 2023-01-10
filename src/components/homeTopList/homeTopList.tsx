import React, { useContext, useState } from "react";
import { StyledTopHome } from "./styles";
import vava from "../../assets/GamesIcons/Valorant.svg";
import lol from "../../assets/GamesIcons/League of Legends.svg";
import joystick from "../../assets/joystick.svg";
import { Button } from "../button/Button";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { GamesContext } from "../../contexts/GamesContext/GamesContext";
import { iAllGames } from "../../contexts/GamesContext/types";
import Modal from "../modal/modal";
import { ModalNewPost } from "../modalNewPost/modalNewPost";

export const HomeTopList = () => {
  const { setFilterPosts } = useContext(UserContext);
  const { allGames, gameSelected, setGameSelected } = useContext(GamesContext);

  const [modalDuo, setModalDuo] = useState(false);

  return (
    <>
      <StyledTopHome>
        <h2>Jogos:</h2>
        <ul>
          {allGames.map((element: iAllGames) => {
            return (
              <li
                key={element.name}
                onClick={() => {
                  setGameSelected(element.name);
                  setFilterPosts(element.name);
                }}
              >
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
            <h2>{gameSelected}</h2>
          </span>
          <Button
            onClick={() => setModalDuo(!modalDuo)}
            buttonType="searchUser"
            type="button"
          >
            Procurar DUO
          </Button>
          <Modal setState={setModalDuo} state={modalDuo} title="Procurar Duo">
            <ModalNewPost setState={setModalDuo} />
          </Modal>
        </div>
      </StyledTopHome>
    </>
  );
};
