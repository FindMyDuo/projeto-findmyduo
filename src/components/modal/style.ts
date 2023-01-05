import { Dialog, DialogOverlay } from "@reach/dialog";
import styled from "styled-components";

export const StyledModal = styled(Dialog)`
  max-width: 500px;
  width: calc(100vw - 2rem);
  margin: 0 auto;
  background-color: var(--gray6);
  padding: 16px;
  position: relative;
  z-index: 1;
  border-radius: var(--radius2);

  & > button {
    position: absolute;
    right: 20px;
    top: 20px;
    background-color: transparent;
    color: var(--fixed-white);
    border: none;
    font-size: var(--font4);
    color: var(--gray1);
  }

  & > h1 {
    font-weight: 600;
    font-size: var(--font2);
    color: var(--fixed-white);
    margin-bottom: 20px;
    color: var(--gray1);
  }
`;

export const StyledOverlayModal = styled(DialogOverlay)`
  width: 100vw;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

export const StyledDiv = styled.div`
  display: flex;
`;
