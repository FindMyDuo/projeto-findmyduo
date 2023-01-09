import { Button } from "../button/Button";
import { StyledDiv } from "./styles";
import MySelect from "../select/select";
import { IModalAddGame } from "./types";

const ModalAddGame = ({ setState }: IModalAddGame) => {
  const list = [
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
  ];

  return (
    <StyledDiv>
      <p>Selecione um jogo</p>
      <MySelect
        placeholder="Selecione um Jogo"
        label={"Selecione um jogo"}
        list={list}
      ></MySelect>
      <Button
        onClick={() => setState((old) => !old)}
        buttonType="register"
        type="submit"
      >
        <span>Adicionar</span>
      </Button>
    </StyledDiv>
  );
};

export default ModalAddGame;
