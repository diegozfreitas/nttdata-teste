import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  label: string;
  inline?: boolean;
  color?: string;
  labelColor?: string;
  border?: string;
  disabled?: boolean
}

export const Button = ({ onClick, label, ...rest }: ButtonProps) => {
  return (
    <Container onClick={onClick} {...rest}>
      {label}
    </Container>
  );
};
