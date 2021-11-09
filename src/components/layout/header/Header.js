import React from "react";
import styled from "styled-components";
import Container from "../container/Container";
import Branding from "./Branding";
import More from "./More";
import Nav from "./Nav";

const StyledHeader = styled.header`
  background: ${(props) => props.theme.colors.dark};
  /* padding: 1rem; */
  @media (${(props) => props.theme.max.md}) {
    background: red;
  }
`;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (${(props) => props.theme.max.md}) {
    flex-direction: column;
  }
`;

const StyledTopPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (${(props) => props.theme.max.md}) {
    background: cyan;
    width: 100%;
  }
`;
const StyledBottomPart = styled.div`
  display: flex;
  flex-direction: column;
  @media (${(props) => props.theme.max.md}) {
    background: yellow;
    width: 100%;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledWrapper>
          <StyledTopPart>
            <Branding />
            <button>OPEN</button>
          </StyledTopPart>
          <StyledBottomPart>
            <Nav />
            <More />
          </StyledBottomPart>
        </StyledWrapper>
      </Container>
    </StyledHeader>
  );
}
