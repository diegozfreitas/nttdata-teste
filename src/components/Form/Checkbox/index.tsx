import React from "react";

import { Container, Check, Label } from "./style";

export interface CheckboxProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export const Checkbox = ({ label, selected, onClick }: CheckboxProps) => {
  return (
    <Container onClick={() => onClick!()}>
      <Check active={selected!} />
      <Label>{label}</Label>
    </Container>
  );
};
