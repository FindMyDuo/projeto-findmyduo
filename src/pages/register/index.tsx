import { FormRegister } from "../../components/form/formRegister/formRegister"
import { StyleResgisterPage } from "./style"
import logo from "../../assets/logo.svg";

export const RegisterPage = () => {
  return(
    <StyleResgisterPage>
      <img src={logo} alt="logotipo de find my duo" />
    <FormRegister/>
    <footer>
    <p> Copyright © 2023 FindMyDuo</p>
    <p> Todos os direitos reservados </p>
    </footer>
    </StyleResgisterPage>
  
  )
}