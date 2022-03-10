import React from "react";
import { StyledButton } from "./style";

const Button = ({
  text,
  type = "button",
  onClick,
}: {
  text: string;
  type?: string;
  onClick?: () => void;
}) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};

export default Button;
