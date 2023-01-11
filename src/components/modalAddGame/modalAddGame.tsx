import api from "../../services/axios";
import MySelect from "../select/select";
import { iGame } from "./types";
import { Button } from "../button/Button";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { StyledForm } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { GamesContext } from "../../contexts/GamesContext/GamesContext";
import { newGameSchema } from "../form/formSchemas";
import { iModalAddGame, iNewGame } from "./types";

export const ModalAddGame = ({ setState }: iModalAddGame) => {
  const { user } = useContext(UserContext);
  const { allGames } = useContext(GamesContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewGame>({
    mode: "onBlur",
    resolver: yupResolver(newGameSchema),
  });

  const alreadyHave = (gameA: iGame, gameB: iGame) => gameA.name === gameB.name;

  const onlyNew = (
    AllGames: iGame[],
    MyGames: iGame[],
    compareFunction: (gameA: iGame, gameB: iGame) => boolean
  ) =>
    AllGames.filter(
      (Game) => !MyGames.some((MyGame) => compareFunction(MyGame, Game))
    );

  const newGames = onlyNew(allGames, user!.favoriteGames, alreadyHave);

  const addGame = (data: iNewGame) => {
    const newGame = allGames.find((game: iGame) => game.name === data.newGame);
    const newListFavorites = [...user!.favoriteGames, newGame];
    const TOKEN = JSON.parse(localStorage.getItem("@TOKEN")!);
    api.patch(
      `users/${user!.id}`,
      { favoriteGames: newListFavorites },
      { headers: { Authorization: `Bearer ${TOKEN}` } }
    );

    setState((old) => !old);
  };

  return (
    <StyledForm onSubmit={handleSubmit(addGame)}>
      <p>Selecione um jogo</p>
      <MySelect
        register={register("newGame")}
        placeholder="Selecione um Jogo"
        label={"Selecione um jogo"}
        list={newGames}
      ></MySelect>
      <span>{errors.newGame && errors.newGame.message}</span>
      <Button buttonType="register" type="submit">
        <span>Adicionar</span>
      </Button>
    </StyledForm>
  );
};

export default ModalAddGame;
