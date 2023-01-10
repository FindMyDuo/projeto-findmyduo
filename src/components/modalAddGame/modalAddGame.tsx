import { Button } from "../button/Button";
import { StyledForm } from "./styles";
import MySelect from "../select/select";
import { IModalAddGame, INewGame } from "./types";
import { IGame } from "./types";
import { newGameSchema } from "../form/formSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/axios";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { useContext } from "react";

const ModalAddGame = ({ setState }: IModalAddGame) => {
  const { allGames } = useContext(GamesContext);

  const { user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewGame>({
    mode: "onBlur",
    resolver: yupResolver(newGameSchema),
  });

  const alreadyHave = (gameA: IGame, gameB: IGame) => gameA.name === gameB.name;

  const onlyNew = (
    AllGames: IGame[],
    MyGames: IGame[],
    compareFunction: (gameA: IGame, gameB: IGame) => boolean
  ) =>
    AllGames.filter(
      (Game) => !MyGames.some((MyGame) => compareFunction(MyGame, Game))
    );

  const newGames = onlyNew(games, user!.favoriteGames, alreadyHave);

  const addGame = (data: INewGame) => {
    const newGame = list.find((game: IGame) => game.name === data.newGame);
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
