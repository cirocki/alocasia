import React from "react";
import styled from "styled-components";
import Container from "../container/Container";
import Author from "./Author";
import Copyrights from "./Copyrights";
import Others from "./Others";

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.colors.dark};
  padding: 1rem 0;
`;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  @media (${(props) => props.theme.max.md}) {
    flex-direction: column;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <StyledWrapper>
          <Copyrights />
          <Others />
          <Author />
        </StyledWrapper>
      </Container>
    </StyledFooter>
  );
}
