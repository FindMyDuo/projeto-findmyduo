import logo from "../../assets/logoMobile.svg";
import { StyledHeader } from './styles';


export const Header = () => {
  return (
    <StyledHeader >
        <img src={logo} alt="logotipo de find my duo" />
        <button> Sobre nós </button>
  
    </StyledHeader>
  );
};