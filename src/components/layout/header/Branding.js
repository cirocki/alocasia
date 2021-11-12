import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { globalHistory as history } from "@reach/router";
import logoImage from "../../../images/icons/iconmonstr-tree-8.svg";
import { mainData } from "../../../data/mainData";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 2rem 0;
`;
const StyledLogo = styled.img`
  margin-right: 1rem;
`;
const StyledHeading = styled.h1`
  color: ${(props) => props.theme.colors.white};
`;
const StyledSpan = styled.span`
  color: ${(props) => props.theme.colors.white};
`;

export default function Branding() {
  const { location } = history;
  const path = location.pathname;
  const brandName = mainData.websiteTitle;
  return (
    <StyledWrapper>
      {/* IF CURRENT URL IS INDEX, LOGO CLICK REDIRECTS TO PAGE TOP, OTHERWISE TO INDEX PAGE  */}
      {path === "/" ? (
        <StyledLink href="#top">
          <StyledLogo src={logoImage} alt={`${brandName} Logo`} />
          <StyledHeading>{brandName}</StyledHeading>
        </StyledLink>
      ) : (
        <StyledLink to="/">
          <StyledLogo src={logoImage} alt={`${brandName} Logo`} />
          <StyledSpan>{brandName}</StyledSpan>
        </StyledLink>
      )}
    </StyledWrapper>
  );
}
