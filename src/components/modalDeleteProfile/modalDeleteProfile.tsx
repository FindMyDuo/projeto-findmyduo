import StyledDiv from "./styles";
import { IModalDelete } from "./types";

const ModalDeleteProfile = ({ setState }: IModalDelete) => {
  return (
    <StyledDiv>
      <h2>Você tem certeza?</h2>

      <button>Confirmar</button>
      <button onClick={() => setState((old: boolean) => !old)}>Cancelar</button>
    </StyledDiv>
  );
};

export default ModalDeleteProfile;
