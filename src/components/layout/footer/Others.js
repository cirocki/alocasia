import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 1rem 0;
  @media (${(props) => props.theme.max.md}) {
    padding: 0.5rem 0;
  }
  @media (${(props) => props.theme.max.lg}) {
    display: none;
  }
`;
const StyledLink = styled.a`
  font-size: 1.6rem;
  margin: 0 1rem;
  @media (${(props) => props.theme.max.xs}) {
    font-size: 1.4rem;
  }
`;

export default function Others() {
  return (
    <StyledWrapper>
      <StyledLink href="#privacy">Privacy Policy</StyledLink>
      <StyledLink href="#terms">Terms of Use</StyledLink>
    </StyledWrapper>
  );
}
