import styled, { createGlobalStyle } from "styled-components";

export const SlideClasses = createGlobalStyle`
  .slide-up-navbar{
    animation: slide-up 500ms;
    height: 100%;
  }

  @keyframes slide-up {
    from {
      height: 7rem;
    }

    to {
      height: 100%;
    }
  }

  .slide-down-navbar {
    animation: slide-down 500ms;
    height: 7rem;
  }

  @keyframes slide-down {
    from {
      height: 100%;
    }

    to {
      height: 7rem;
    }


  }
`;

export const StyledNavbar = styled.header`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 7rem;
  background-color: var(--gray5);
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  overflow-y: hidden;

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

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

  img {
    pointer-events: none;
  }

  svg {
    pointer-events: none;
  }
`;
