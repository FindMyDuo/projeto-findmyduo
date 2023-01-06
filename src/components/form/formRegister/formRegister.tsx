import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../button/Button";
import { Input } from "../../input/Input";
import { FormStyle } from "./style";
import { registerSchema } from "../formSchemas";
import { iRegisterData } from "./types";
import { iLoginData } from "../formLogin/types";
import { Link } from "react-router-dom";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterData>({
    resolver: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<iLoginData> = async (data) => {
    console.log(data);
  };

  function handleClick() {
    console.log("click");
  }

  return (
    <FormStyle onSubmit={handleSubmit(submit)}>
      <div>
        <h1>Registro</h1>
        <Link to='/login'>Voltar para login</Link>
      </div>
      <Input
        placeHolder="Digite seu nome"
        errorInput={errors.name?.message}
        register={register("name")}
        type="text"
        children="Nome"
      />
      <span>{errors?.name ? errors.name.message : null}</span>
      <Input
        placeHolder="Digite seu email"
        errorInput={errors.email?.message}
        register={register("email")}
        type="email"
        children="e-mail"
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
      <Input
        placeHolder="Confirme sua senha"
        errorInput={errors.confirmPassword?.message}
        register={register("confirmPassword")}
        type="password"
        children="Confirmaçao de senha"
      />
      <span>{errors?.confirmPassword ? errors.confirmPassword.message : null}</span>
      <Input
        placeHolder="Discord (Opcional)"
        errorInput={errors.socialMedia?.message}
        register={register("socialMedia")}
        type="text"
        children="Discord"
      />
      <span>{errors?.socialMedia ? errors.socialMedia.message : null}</span>

      <Button
        type={"submit"}
        buttonType={"register"}
        children={"Registrar"}
        onClick={handleClick}
      />
    </FormStyle>
  );
};
