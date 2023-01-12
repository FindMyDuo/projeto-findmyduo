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

    > button {
      background: none;
      border: none;
      color: var(--gray2);
    }
  }

  > div:nth-child(2) {
    background: var(--gray5);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
    padding: 15px;
    overflow-y: scroll;
  }

  .owner {
    margin-left: auto;
    text-align: right;
    border-radius: 16px;
    border-top-right-radius: 0px;
  }

  .userInfo {
    width: 70%;
    display: flex;
    gap: 15px !important;

    p {
      color: var(--gray1);
      font-size: var(--font4);
    }
  }
`;

export const MessagesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  width: fit-content;
  padding: 10px 0.5rem;

  min-width: 25%;
  max-width: 80%;

  background-color: #373943;
  border-radius: 16px;
  border-top-left-radius: 0px;
  color: #fff;
  margin-top: 12px;
  overflow-wrap: break-word;

  span {
    font-size: 11px;
    color: var(--gray1);

    margin-bottom: -4px;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;

    div {
      max-width: 100%;
      overflow-wrap: break-word;
    }
  }
`;
