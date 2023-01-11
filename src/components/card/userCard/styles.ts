import styled from "styled-components";

export const StyledUserCardContainer = styled.ul`
  width: 100%;
  padding: 16px;
  background-color: var(--gray6);
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
`;

export const StyledUserCard = styled.li`
  width: 100%;
  height: 82px;
  padding: 6px;

  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.02);
    border: 1px solid var(--fixed-white);
  }

  background-color: var(--gray5);

  border-radius: var(--radius1);

  h2 {
    color: var(--fixed-white);
    font-size: var(--font2);
    font-weight: 400;
  }

  figure {
    height: 70px;
    width: 70px;
    border: 1px solid var(--color-primary);
    border-radius: 100%;
    margin-right: 12px;
  }

  figure img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
    object-fit: cover;
  }

  section img {
    margin-right: 5px;
    height: 25px;
    width: 25px;
    border-radius: 2px;
    margin-top: 10px;
  }
`;
