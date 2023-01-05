import Button from "../button/Button";
import StyledForm from "./styles";
import MySelect from "../select/select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postSchema } from "../form/formSchemas";
import { INewPost } from "./types";

export const ModalNewPost = () => {
  const gameList = [
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewPost>({
    mode: "onBlur",
    resolver: yupResolver(postSchema),
  });

  const newPost = (data: INewPost) => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(newPost)}>
      <MySelect
        register={register("title")}
        label="Selecionar jogo"
        placeholder="Selecionar jogo"
        list={gameList}
      />
      <span>Digite seu texto</span>
      <textarea
        {...register("content")}
        disabled={false}
        placeholder="Qual a play de hoje?"
      ></textarea>
      <Button type="submit" buttonType="register">
        <span>Postar</span>
      </Button>
    </StyledForm>
  );
};
