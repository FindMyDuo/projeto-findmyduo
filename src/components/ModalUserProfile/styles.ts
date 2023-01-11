import { Button } from "./../button/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  gap: 1rem;
  overflow-y: auto;

  & > div:nth-child(1) {
    display: none;
  }

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 138px;
    height: 138px;
    border-radius: 50%;
    border: 2px solid var(--color-primary);
    transform: translateY(-50%);
    margin: 0 auto;
    margin-top: 10rem;

    img {
      width: 130%;
    }
  }

  & > div {
    width: 100%;
    background-color: var(--gray4);
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    border-radius: var(--radius1);
    gap: 16px;
    align-items: center;
    text-align: center;
    padding: 6px;
  }

  * {
    scrollbar-width: auto;
    scrollbar-color: var(--gray4);
  }

  *::-webkit-scrollbar {
    height: 6px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
    width: 4px;
    height: 4px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
    border-radius: var(--radius1);
    border: 0px solid #ffffff;
    width: 4px;
    height: 4px;
  }

  & > div:nth-child(4) {
    display: flex;
    flex-direction: row;
    text-align: center;
  }

  & > div:nth-child(5) {
    background: none;
    display: flex;
    align-items: center;

    & > h3 {
      margin-right: auto;
      color: var(--gray1);
      font-size: var(--font2);
      margin-bottom: -22px;
    }
  }

  & > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    background: none;
    margin-top: -3rem;

    & > h2 {
      width: 100%;
      text-align: center;
      font-size: var(--font3);
      color: var(--fixed-white);
    }
    & > h4 {
      width: 100%;
      text-align: center;
      color: #c2c2c2;
    }
  }

  & > div:nth-child(6) > img {
    max-width: 45px;
    max-height: 45px;
    border-radius: var(--radius1);
  }
  section {
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      max-width: 200px;

      background: var(--color-primary);
      height: 40px;
      padding: 0 8px;
      width: 60%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        color: white;
      }
    }
  }
  & > Button:nth-child(7) {
    background: var(--gray4);
    padding: 0 8px;
    color: red;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 991px) {
    & > div:nth-child(1) {
      display: flex;
      position: absolute;
      width: 100%;
      height: 10rem;
      border-radius: 0;
      top: 0;
      left: 0;
      animation: slide-down-profile 500ms;
    }
  }
`;

export const StyledLink = styled(Link)`
  width: 30px;
  height: 30px;
  background-color: transparent;
`;

export const DiscordButton = styled.button`
  width: 40px;
  height: 30px;
  background-color: transparent;
  border: none;
`;
