
import { StyleLoginPage } from "./style"

import loginImg from "../../assets/loginImg.svg";
import { FormLogin } from "../../components/form/formLogin/formLogin";
import { Header } from "../../components/header/header";

export const LoginPage = () => {
  return(
    <StyleLoginPage>
      <Header/>
      <div>
        <FormLogin/>
        <img src={loginImg} alt="" />
        <div>
          <p>Entre e encontre o <span> DUO</span> perfeito para sua partida</p>
        </div>
      </div>
    <footer>
      <p> Copyright © 2023 FindMyDuo</p>
      <p> Todos os direitos reservados </p>
    </footer>
    </StyleLoginPage>
  
  )
}