import React from "react";

import { thisComp } from "./types";
import { Container } from "./style";

export const ButtonAction: React.FC<thisComp> = (props) => {
  const { children, disabled, onClick } = props;

  return (
    <Container onClick={disabled ? () => {} : onClick} disabled={disabled}>
      {children}
    </Container>
  );
};
