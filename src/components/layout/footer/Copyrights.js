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

export default function Copyrights() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const copyrightsOwner = mainData.websiteTitle;
  const language = mainData.lang;

  return (
    <StyledWrapper>
      <StyledParagraph>
        © {currentYear} {copyrightsOwner} -{" "}
        {language === "eng"
          ? "All rights reserved."
          : "Wszystkie prawa zastrzeżone."}
      </StyledParagraph>
    </StyledWrapper>
  );
}
