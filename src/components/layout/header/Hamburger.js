import React from "react";
import styled from "styled-components";
import "./HamburgerStyles.css";

const StyledHamburgerButton = styled.a`
  display: none;
  @media (${(props) => props.theme.max.md}) {
    display: flex;
  }
`;
export default function Hamburger({ isOpen, toggleMenu }) {
  return (
    <StyledHamburgerButton
      aria-expanded={isOpen}
      aria-label="Toggle navigation"
      onClick={toggleMenu}
      className={`hamburger hamburger--spin js-hamburger ${
        isOpen ? "is-active" : ""
      }`}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </StyledHamburgerButton>
  );
}
