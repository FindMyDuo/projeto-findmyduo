import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../button/Button";
import { Input } from "../../input/Input";
import { loginSchema } from "../formSchemas";
import { Link } from "react-router-dom";
import { FormStyle } from "./style";
import { useContext } from "react";
import { iLoginData } from "./types";
import { UserContext } from "../../../contexts/UserContext/UserContext";

export const FormLogin = () => {
  const { login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginData>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginData> = async (data) => {
    login(data);
  };

  const handleClick = () => {
    console.log("click");
  };

  return (
    <FormStyle onSubmit={handleSubmit(submit)}>
      <h1>Login</h1>
      <Input
        placeHolder="Digite seu email"
        errorInput={errors.email?.message}
        register={register("email")}
        type="email"
        children="email"
      />
      <span>{errors?.email ? errors.email.message : null}</span>
      <Input
        placeHolder="Digite sua senha"
        errorInput={errors.password?.message}
        register={register("password")}
        type="password"
        children="Senha"
      />
      <span>{errors?.password ? errors.password.message : null}</span>
      <Button
        type={"submit"}
        //o tipo fiica como register pelo estiilo, e necessario alterar o estilo depois na logica do button
        buttonType={"register"}
        children={"Entrar"}
        onClick={handleClick}
      />

      <div>
        <p>Não tem uma conta? cadastre-se</p>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </FormStyle>
  );
};
