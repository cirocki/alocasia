import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: ${(props) => props.theme.colors.dark};
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Header</h1>
    </StyledHeader>
  );
}
