import { Input } from "../input/Input";
import StyledForm from "./styles";
import { Button } from "../button/Button";
import { profileSchema } from "../form/formSchemas";
import { IProfile } from "./types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/axios";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const ModalEditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfile>({
    mode: "onBlur",
    resolver: yupResolver(profileSchema),
  });

  const { user } = useContext(UserContext);

  const handleAttUser = (data: IProfile) => {
    const TOKEN = JSON.parse(localStorage.getItem("@TOKEN")!);
    const ID = JSON.parse(localStorage.getItem("@ID")!);
    api.patch(`users/${ID}`, data, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
  };

  return (
    <StyledForm noValidate={true} onSubmit={handleSubmit(handleAttUser)}>
      <Input
        errorInput={errors.name?.message}
        register={register("name")}
        type="text"
        placeHolder="Nome"
        defaultValue={user!.name}
      >
        <span>Nome de usuário</span>
      </Input>
      {errors.name && <span> {errors.name.message}</span>}
      <Input
        errorInput={errors.email?.message}
        register={register("email")}
        type="text"
        placeHolder="Email"
        defaultValue={user!.email}
      >
        <span>Email do Usuário</span>
      </Input>
      {errors.name && <span> {errors.name.message}</span>}
      <Input
        errorInput={errors.socialMedia?.message}
        register={register("socialMedia")}
        type="text"
        placeHolder="Name#discord"
        defaultValue={user!.socialMedia}
      >
        <span>Alterar discord</span>
      </Input>
      {errors.name && <span> {errors.name.message}</span>}
      <Input
        errorInput={errors.url?.message}
        register={register("url")}
        type="text"
        placeHolder="URL"
        defaultValue={user!.url}
      >
        <span>Alterar foto</span>
      </Input>
      {errors.name && <span> {errors.name.message}</span>}
      <Button type="submit" buttonType="register">
        <span>Confirmar</span>
      </Button>
    </StyledForm>
  );
};

export default ModalEditProfile;
