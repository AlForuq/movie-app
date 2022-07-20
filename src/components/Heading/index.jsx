import React from "react";
import { Container } from "./style";

export const Header = ({heading}) => {
  return (
    <Container className="col">
      <h1>{heading}</h1>
    </Container>
  );
};
