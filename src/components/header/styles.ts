import styled from "styled-components";

export const StyledHeader = styled.header`
      position: relative;
      background-color: var(--gray5);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 140px;
      top: 0;
      min-width: 250px;

      > img{
            max-width: 450px;
      }
      > button {
       
            background-color: var(--gray6);
            color: #BBBBBB ;
            border: none;
            width: max-content;
            height: max-content; 
            padding: 10px 28px ;
            border-radius: var(--radius1);
      }
` 