import React from "react";
import styled from "styled-components";
import Container from "../container/Container";

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.colors.dark};
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <h1>Footer</h1>
      </Container>
    </StyledFooter>
  );
}
