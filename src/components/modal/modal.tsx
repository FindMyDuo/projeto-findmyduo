import { StyledModal, StyledOverlayModal } from "./style";
import IModal from "./types";

const Modal = ({ title, setState, state, children }: IModal) => {
  return (
    <StyledOverlayModal isOpen={state} onDismiss={() => setState(!state)}>
      <StyledModal>
        <h1>{title}</h1>

        <button onClick={() => setState(!state)}>X</button>
        {children}
      </StyledModal>
    </StyledOverlayModal>
  );
};

export default Modal;
