import React, { HtmlHTMLAttributes } from 'react';
import styled from "styled-jsx/css";

type Variant = 'primary' | 'link' | 'default';

const StyledButton = styled.button`
  
`

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button = ({
  variant = 'default',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};
