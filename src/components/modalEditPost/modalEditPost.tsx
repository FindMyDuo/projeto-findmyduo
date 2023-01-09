import { Button } from "../button/Button";
import StyledForm from "./styles";
import MySelect from "../select/select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postEditSchema } from "../form/formSchemas";
import { IModalEdit, IPost } from "./types";
import api from "../../services/axios";

export const ModalEditPost = ({ post, setState }: IModalEdit) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPost>({
    mode: "onBlur",
    resolver: yupResolver(postEditSchema),
  });

  const editPost = async (data: IPost) => {
    const TOKEN = JSON.parse(localStorage.getItem("@TOKEN")!);
    const { data: attData } = await api.patch(`/posts/${post.id}`, data, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });

    console.log(attData);
    /*FUNÇÃO QUE BUSCA OS DADOS DO USUÁRIO NOVAMENTE AQUI*/
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
    </StyledForm>
  );
};
