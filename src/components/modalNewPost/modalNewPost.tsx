import { Button } from "../button/Button";
import StyledForm from "./styles";
import MySelect from "../select/select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postSchema } from "../form/formSchemas";
import { INewPost } from "./types";
import api from "../../services/axios";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { useContext } from "react";

export const ModalNewPost = () => {
  const { user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewPost>({
    mode: "onBlur",
    resolver: yupResolver(postSchema),
  });

  const newPost = async (data: INewPost) => {
    const TOKEN = JSON.parse(localStorage.getItem("@TOKEN")!);
    await api.post("/posts", data, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit(newPost)}>
      <input
        type="text"
        value={user!.id + ""}
        {...register("userId")}
        style={{ display: "none" }}
      />
      <MySelect
        register={register("title")}
        label="Selecionar jogo"
        placeholder="Selecionar jogo"
        list={user!.favoriteGames}
      />
      {errors.title && <p>{errors.title.message}</p>}
      <span>Digite seu texto</span>
      <textarea
        {...register("content")}
        disabled={false}
        placeholder="Qual a play de hoje?"
      ></textarea>
      {errors.content && <p>{errors.content.message}</p>}
      <Button type="submit" buttonType="register">
        <span>Postar</span>
      </Button>
    </StyledForm>
  );
};
