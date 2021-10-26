import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.colors.dark};
`;

export default function Footer() {
  return (
    <StyledFooter>
      <h1>Footer</h1>
    </StyledFooter>
  );
}
