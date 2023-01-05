
import styled from "styled-components"

export const FormStyle = styled.form`
display: flex;
flex-direction: column;
padding: 18px;
gap: 8px;
background-color: #1A1B1F;





> div:first-child{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;

    > a {
        font-size: var(--font6);
        color: var(--fixed-white);
        border-bottom: 1px solid;
    }

    >h1{
        font-size: var(--font1);
        color: var(--fixed-white);
        border-bottom: 5px solid var(--color-primary);
    }
}

button{
    margin-top: 15px;
}
`;
