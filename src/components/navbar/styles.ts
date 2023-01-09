import styled from "styled-components";

export const StyledNavbar = styled.header`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6rem;
  background-color: var(--gray5);
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: transparent;
    height: 60px;
    width: 60px;
    border: none;
    border-radius: 16px;

    :hover {
        background-color: var(--color-primary);
    }

    :focus {
        background-color: var(--color-primary);
    }
  }
`;
