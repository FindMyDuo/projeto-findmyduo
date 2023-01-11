import styled from "styled-components";

export const ContainerMessages = styled.div`
  width: 100%;
  height: 100vh;

  > div:nth-child(1) {
    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--gray6);

    > div {
      display: flex;
      align-items: center;
      gap: 5px;

      figure {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        border: 1px solid var(--color-primary);
      }

      img {
        width: 70px;
        border-radius: 50%;
      }
    }
  }

  > div:nth-child(2) {
    background: var(--gray5);
    padding: 10px;
    height: 80vh;
    overflow-y: scroll;
  }
`;
