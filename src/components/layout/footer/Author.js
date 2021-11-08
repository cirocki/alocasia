import React from "react";
import styled from "styled-components";
import { mainData } from "../../../data/mainData";

const StyledWrapper = styled.div`
  padding: 1rem 0;
  @media (${(props) => props.theme.max.md}) {
    padding: 0.5rem 0;
  }
`;
const StyledParagraph = styled.p`
  font-size: 1.6rem;
  @media (${(props) => props.theme.max.xs}) {
    font-size: 1.4rem;
  }
`;

export default function Author() {
  const { author, authorURL } = mainData;
  return (
    <StyledWrapper>
      <StyledParagraph>
        Designed and developed by <a href={authorURL}>{author}</a>
      </StyledParagraph>
    </StyledWrapper>
  );
}
