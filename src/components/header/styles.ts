import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--gray5);

  button {
    background: transparent;
    border: none;
    color: var(--gray2);
  }
`;
