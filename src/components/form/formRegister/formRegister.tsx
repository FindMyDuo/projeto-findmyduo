import Button from '../../button/Button'
import { Input } from '../../input/Input';
// import { Link } from "react-router-dom";
import { FormStyle } from './style';

export const FormRegister = () =>  {
    function handle(){
        console.log("oi")
    }
    const errors = {
        password: {
            message: "oii"
        }
    }


  return (
    <FormStyle>
        <div>
            <h1>Registro</h1>
            <a>Voltar para login</a>
            {/* <Link to='/'>Voltar para login</Link> */}
        </div>
      <Input
       placeHolder='Digite seu nome'
       errorInput={errors?.password?.message} 
    //    register={register("name")} 
       type="text"
       children="name"
    />

    <Input
        placeHolder='Digite seu email'
        errorInput={errors?.password?.message} 
        //    register={register("name")} 
        type="text"
        children="email"
    />
    <Input
        placeHolder='Digite sua senha'
        errorInput={errors?.password?.message} 
        //    register={register("name")} 
        type="text"
        children="Senha"
    />
    <Input
        placeHolder='Confirme sua senha'
        errorInput={errors?.password?.message} 
        //    register={register("name")} 
        type="text"
        children="Confirmaçao de senha"
    />

    <Input
        placeHolder='Discord (Opcional)'
        errorInput={errors?.password?.message} 
        //    register={register("name")} 
        type="text"
        children="Discord"
    />


      <Button type={'submit'} buttonType={'register'} children={"Registrar"} onClick={handle} />
    </FormStyle>
  );
};
