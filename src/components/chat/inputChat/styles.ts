import styled from "styled-components";

export const BoxInput = styled.div`
  display: flex;
  gap: 12px;
  background-color: #1a1b1f;
  padding: 15px 25px;
  align-self: flex-end;
  width: 100%;
  > input {
    font-size: 18px;
    width: 80%;
    border: none;
    border-radius: 16px;
    padding: 15px;
    background-color: #21232b;
    color: #6b6c7a;
  }
  > button {
    font-size: 25px;
    color: #fff;
  }
`;