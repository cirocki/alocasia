import React, { useState } from "react";
import styled from "styled-components";
import Container from "../container/Container";
import Branding from "./Branding";
import Hamburger from "./Hamburger";
import More from "./More";
import Nav from "./Nav";

const StyledHeader = styled.header`
  background: ${(props) => props.theme.colors.dark};
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 999;
  @media (${(props) => props.theme.max.md}) {
  }
`;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${(props) => props.theme.max.md}) {
    min-height: ${(props) => (props.isOpen ? "100vh" : "auto")};
    display: flex;
    flex-direction: column;
  }
`;

const StyledTopPart = styled.div`
  @media (${(props) => props.theme.max.md}) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const StyledBottomPart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  @media (${(props) => props.theme.max.md}) {
    width: 100%;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledHeader>
      <Container>
        <StyledWrapper isOpen={isOpen}>
          <StyledTopPart>
            <Branding />
            <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
          </StyledTopPart>
          <StyledBottomPart isOpen={isOpen}>
            <Nav />
            <More />
          </StyledBottomPart>
        </StyledWrapper>
      </Container>
    </StyledHeader>
  );
}
