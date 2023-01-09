import { Input } from "../input/Input";
import StyledForm from "./styles";
import { Button } from "../button/Button";
import { profileSchema } from "../form/formSchemas";
import { IProfile } from "./types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/axios";

export const ModalEditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfile>({
    mode: "onBlur",
    resolver: yupResolver(profileSchema),
  });

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

  const handleAttUser = (data: IProfile) => {
    const TOKEN = JSON.parse(localStorage.getItem("@TOKEN")!);
    api.patch(`users/${user.id}`, data, {
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
      >
        <span>Nome de usuário</span>
      </Input>
      <Input
        errorInput={errors.email?.message}
        register={register("email")}
        type="text"
        placeHolder="Email"
      >
        <span>Email do Usuário</span>
      </Input>

      <Input
        errorInput={errors.socialMedia?.message}
        register={register("socialMedia")}
        type="text"
        placeHolder="Name#discord"
      >
        <span>Alterar discord</span>
      </Input>

      <Input
        errorInput={errors.profileImage?.message}
        register={register("profileImage")}
        type="text"
        placeHolder="URL"
      >
        <span>Alterar foto</span>
      </Input>
      <Input
        errorInput={errors.password?.message}
        register={register("password")}
        type="password"
        placeHolder="Senha"
      >
        <span>Alterar senha</span>
      </Input>
      <Input
        errorInput={errors.confirmPassword?.message}
        register={register("confirmPassword")}
        type="password"
        placeHolder="Confirmação de senha"
      >
        <span>Confirmar senha</span>
      </Input>
      <Button type="submit" buttonType="register">
        <span>Confirmar</span>
      </Button>
    </StyledForm>
  );
};

export default ModalEditProfile;
