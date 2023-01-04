import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,ol{
    list-style: none;
  }

  button{
    cursor: pointer;
  }

  body{
    font-family: 'Inter';
  }

  :root{
    --gray6: #1A1B1F;
    --gray5: #21232B;
    --gray4: #373943;
    --gray3: #50515E;
    --gray2: #6B6C7A;
    --gray1: #A9AAB2;

    --fixed-white: #FFFFFF;

    --color-primary: #0D81EC;

    --font1: 2.625rem;    //42px
    --font2: 1.5rem;     //24px
    --font3: 2rem;       //32px
    --font4: 1.125rem;   //18px
    --font5: 1rem;       //16px
    --font6: .75rem;     //12px

    --radius1: .5rem;    //8px
    --radius2: 1rem;    //16px
  }
`;
