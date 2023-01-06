import styled from "styled-components";

export const StyleResgisterPage = styled.section`
 display: flex;
 flex-direction: column;
 background-color: var(--gray6);
 justify-content: center;
 padding: 15px;

 > img {
    max-width: 250px;
    align-self: center;
    margin-bottom: 25px;
 }
 > footer {
    color: var(--fixed-white);
    align-self: center;
    max-width: 250px;
    font-size: var(--font6);
    line-height: 24px;
    margin-top: 22px;
 }
 `