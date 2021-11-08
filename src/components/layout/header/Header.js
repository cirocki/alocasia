import React from "react";
import styled from "styled-components";
import Container from "../container/Container";
import Branding from "./Branding";

const StyledHeader = styled.header`
  background: ${(props) => props.theme.colors.dark};
  padding: 1rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Branding />
      </Container>
    </StyledHeader>
  );
}
