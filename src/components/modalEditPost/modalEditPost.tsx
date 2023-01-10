import { Button } from "../button/Button";
import StyledForm from "./styles";
import MySelect from "../select/select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postEditSchema } from "../form/formSchemas";
import { IModalEdit, IPost } from "./types";
import api from "../../services/axios";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { useContext } from "react";

export const ModalEditPost = ({ post, setState }: IModalEdit) => {
  const { setLoadingGames } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPost>({
    mode: "onBlur",
    resolver: yupResolver(postEditSchema),
  });

  const TOKEN = JSON.parse(localStorage.getItem("@TOKEN")!);

  const editPost = async (data: IPost) => {
    setLoadingGames(true);
    try {
      await api.patch(`/posts/${post.id}`, data, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingGames(false);
    }

    setState((old) => !old);
  };

  const deletePost = async () => {
    setLoadingGames(true);
    try {
      await api.delete(`/posts/${post.id}`, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingGames(false);
    }
    setState((old) => !old);
  };

  return (
    <StyledForm onSubmit={handleSubmit(editPost)}>
      <span>Edit seu post</span>
      <textarea
        {...register("content")}
        disabled={false}
        defaultValue={post.content}
      ></textarea>
      {errors.content && <span>{errors.content.message}</span>}
      <Button type="submit" buttonType="register">
        <span>Postar</span>
      </Button>
      <Button buttonType="register" type="button" onClick={deletePost}>
        <span>Excluir</span>
      </Button>
    </StyledForm>
  );
};
