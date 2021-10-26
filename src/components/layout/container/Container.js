import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  @media (${(props) => props.theme.max.md}) {
    padding: 0;
  }
`;

export default function Container({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
