import React from "react";
import styled from "styled-components";
import Container from "../container/Container";
import Author from "./Author";
import Copyrights from "./Copyrights";
import Others from "./Others";

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.colors.dark};
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Copyrights />
        <Others />
        <Author />
      </Container>
    </StyledFooter>
  );
}
