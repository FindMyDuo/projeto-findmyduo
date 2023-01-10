import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import api from "../../services/axios";
import StyledDiv from "./styles";
import { IModalDelete } from "./types";

const ModalDeleteProfile = ({ setState }: IModalDelete) => {
  const deleteUser = () => {
    const TOKEN = JSON.parse(localStorage.getItem("@TOKEN")!);
    const ID = JSON.parse(localStorage.getItem("@ID")!);
    api.delete(`users/${ID}`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
  };

  return (
    <StyledDiv>
      <h2>Você tem certeza?</h2>
      <button onClick={deleteUser}>Confirmar</button>
      <button onClick={() => setState((old: boolean) => !old)}>Cancelar</button>
    </StyledDiv>
  );
};

export default ModalDeleteProfile;
