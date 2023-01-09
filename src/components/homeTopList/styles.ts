import styled from 'styled-components';

export const StyledTopHome = styled.div`
  margin-top: 59px;
  background-color: var(--gray5);

  h2 {
    color: var(--gray1);
    padding: 0 12px;
  }

  ul {
    display: flex;
    gap: 15px;
    padding: 22px 12px;
  }

  li {
    display: flex;
    height: 80px;
    align-items: center;

    figure {
      border: 2px solid transparent;
      opacity: 0.5;
      display: flex;
      align-items: center;
      border-radius: var(--radius1);

      :hover {
        opacity: 1;
        cursor: pointer;
        border-color: var(--color-primary);
      }
    }
  }

  div {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--gray6);
    padding: 0 12px;

    span {
      display: flex;
    }
  }
`;