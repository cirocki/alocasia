import React from "react";
import styled from "styled-components";
import Container from "../../container/Container";

const StyledSection = styled.section`
  background: ${(props) => props.theme.colors.primary};
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 720px;
`;
const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-size: 7rem;
`;
const StyledSubtitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  text-transform: uppercase;
`;
export default function Hero() {
  return (
    <StyledSection>
      <Container>
        <StyledWrapper>
          <StyledSubtitle>Gatsby Starter Theme</StyledSubtitle>
          <StyledTitle>Keep going, keep growing</StyledTitle>
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
}
