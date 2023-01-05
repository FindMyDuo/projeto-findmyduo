import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../button/Button";
import { Input } from "../../input/Input";
import { loginSchema } from "../formSchemas";
import { Link } from "react-router-dom";
import { FormStyle } from "./style";
import { iLoginData } from "./types";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginData>({
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginData> = async (data) => {
    console.log(data);
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
      <Input
        placeHolder="Digite sua senha"
        errorInput={errors.password?.message}
        register={register("password")}
        type="password"
        children="Senha"
      />
      <Button
        type={"submit"}
        buttonType={"login"}
        children={"Entrar"}
        onClick={handleClick}
      />

      <div>
        <p>Não tem uma conta? cadastre-se</p>
        <a href="">Cadastre-se</a>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </FormStyle>
  );
};
