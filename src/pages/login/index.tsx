
import { StyleLoginPage } from "./style"
import logo from "../../assets/logo.svg";
import { FormLogin } from "../../components/form/formLogin/formLogin";

export const LoginPage = () => {
  return(
    <StyleLoginPage>
      <img src={logo} alt="logotipo de find my duo" />
    <FormLogin/>
    <footer>
    <p> Copyright © 2023 FindMyDuo</p>
    <p> Todos os direitos reservados </p>
    </footer>
    </StyleLoginPage>
  
  )
}