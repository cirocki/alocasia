import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { navItemsData } from "../../../data/mainNavItems";

const StyledNav = styled.nav`
  padding: 1rem 0;
  flex: 1;
  display: flex;
  justify-content: center;
  @media (${(props) => props.theme.max.md}) {
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    border-top: 1px solid ${(props) => props.theme.colors.darkgrey};
    border-bottom: 1px solid ${(props) => props.theme.colors.darkgrey};
  }
`;
const StyledList = styled.ul`
  display: inline-flex;
  @media (${(props) => props.theme.max.md}) {
    flex-direction: column;
  }
`;
const StyledItem = styled.li`
  margin: 0 1rem;
  display: flex;
  position: relative;
  display: inline-block;
  @media (${(props) => props.theme.max.md}) {
    margin: 0.5rem 0;
  }
`;
const StyledDropdownContent = styled.div`
  position: absolute;
  background: white;
  border: 1px solid red;
  display: none;
  ${StyledItem}:hover & {
    display: flex;
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;

  @media (${(props) => props.theme.max.md}) {
    padding: 1rem;
  }
`;

const StyledDropdownItem = styled.li`
  margin: 0 1rem;
  display: block;
  @media (${(props) => props.theme.max.md}) {
    margin: 0.5rem 0;
  }
`;
export default function Nav() {
  return (
    <StyledNav>
      <StyledList>
        {navItemsData.map((item) => (
          <StyledItem key={item.name}>
            <StyledLink to={item.path}>{item.name}</StyledLink>
            {/* IF ITEMS HAVE CHILDS   */}
            {item.childs && (
              <StyledDropdownContent>
                {item.childs.map((item) => (
                  <StyledDropdownItem key={item.name}>
                    <StyledLink to={item.path}>{item.name}</StyledLink>
                  </StyledDropdownItem>
                ))}
              </StyledDropdownContent>
            )}
          </StyledItem>
        ))}
      </StyledList>
    </StyledNav>
  );
}
