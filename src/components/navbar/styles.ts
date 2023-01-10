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

export const StyledMobileNavbar = styled.aside`
  position: fixed;
  bottom: 0;
  display: none;
  width: 100%;
  height: 7rem;
  background-color: var(--gray5);
  padding: 1.5rem 1rem;
  flex-direction: column-reverse;
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

  @media (max-width: 991px) {
    display: flex;
  }
`;

export const StyledDesktopNavbar = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 360px;
  height: 100%;
  background-color: var(--gray5);
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: hidden;
  z-index: 1;

  .logo {
    position: absolute;
    width: 85%;
    height: 60px;
  }

  div {
    margin: auto 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    gap: 1rem;
  }

  button {
    background-color: transparent;
    height: 60px;
    width: 100%;
    border: none;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding: 0 1.25rem;

    h3 {
      text-align: center;
      color: white;
    }

    img {
      pointer-events: none;
      width: 38px;
      height: 38px;
    }

    svg {
      width: 38px;
      height: 38px;
      pointer-events: none;
    }

    :hover {
      background-color: var(--color-primary);
    }

    :focus {
      background-color: var(--color-primary);
    }
  }

  @media (max-width: 991px) {
    display: none;
  }
`;
