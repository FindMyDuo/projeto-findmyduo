import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import api from "../../services/axios";
import StyledDiv from "./styles";
import { IModalDelete } from "./types";

const ModalDeleteProfile = ({ setState }: IModalDelete) => {
  /*const { user } = useContext(UserContext);*/

  const user = {
    email: "joao@joao.com",
    password: "$2a$10$TmkqJZ3wgsLNWN8MInbfFeWQPiEDkcI4lXy3yDeW7HVx9MYT3ufO2",
    name: "Borchoski",
    age: "32",
    favoriteGames: [
      {
        name: "Fortinite",
        genre: "Battle royale",
      },
      {
        name: "PUBG",
        genre: "Battle royale",
      },
      {
        name: "Valorant",
        genre: "FPS",
      },
      {
        name: "Minecraft",
        genre: "Survival",
      },
    ],
    socialMedia: "@joao_borchoski",
    id: 1,
  };

  const deleteUser = () => {
    const TOKEN = JSON.parse(localStorage.getItem("@TOKEN")!);
    api.delete(`users/${user!.id}`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
  };

  return (
    <StyledDiv>
      <h2>Você tem certeza?</h2>
      <button onClick={deleteUser}>Confirmar</button>
      <button onClick={() => setState((old: boolean) => !old)}>Cancelar</button>
    </StyledDiv>
  );
};

export default ModalDeleteProfile;
