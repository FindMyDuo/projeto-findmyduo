import React from 'react';
import { StyledButton } from './styles';
import { iButton } from './types';

export const Button = ({ buttonType, onClick, type, children }: iButton) => {
  return (
    <StyledButton onClick={onClick} buttonType={buttonType} type={type}>
      {children}
    </StyledButton>
  );
};