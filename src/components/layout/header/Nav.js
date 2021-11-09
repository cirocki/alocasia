import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { navItemsData } from "../../../data/mainNavItems";

const StyledNav = styled.nav`
  padding: 1rem 0;
`;
const StyledList = styled.ul`
  display: inline-flex;
  @media (${(props) => props.theme.max.md}) {
    flex-direction: column;
  }
`;
const StyledItem = styled.li`
  margin: 0 1rem;
`;
const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;
`;
export default function Nav() {
  return (
    <StyledNav>
      <StyledList>
        {navItemsData.map((item) => (
          <StyledItem key={item.name}>
            <StyledLink to={item.path}>{item.name}</StyledLink>
          </StyledItem>
        ))}
      </StyledList>
    </StyledNav>
  );
}
