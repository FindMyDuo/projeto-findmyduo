import styled from "styled-components";

export const ContainerMessages = styled.div`
  max-height: calc(100% - 5rem);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > div:nth-child(1) {
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--gray6);
    

    > div {
      display: flex;
      flex-direction: row;
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
    background: var(--gray5)
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
    padding: 15px;
    overflow-y: scroll;
  }

  .owner {
    margin-left: auto;
  }
`;

export const MessagesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  width: fit-content;
  padding: 0.5rem;

  p > padding: 12px;
  background-color: #373943;
  border-radius: 16px;
  color: #fff;
  margin-top: 12px;  
`;
