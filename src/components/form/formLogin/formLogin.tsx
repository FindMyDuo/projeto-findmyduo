import Button from '../../button/Button'
import { Input } from '../../input/Input';
// import { Link } from "react-router-dom";
import { FormStyle } from './style';

export const FormLogin = () =>  {
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
            <h1>Login</h1>
          
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
         <Button type={'submit'} buttonType={'register'} children={"Entrar"} onClick={handle} />
    
            <div>
                <p>Não tem uma conta? cadastre-se</p>
                <a href="">Cadastre-se</a>
                {/* <Link to='/register'>Cadastre-se</Link> */}
            </div>
    
        </FormStyle>
      );
};
