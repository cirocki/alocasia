import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  @media (${(props) => props.theme.max.xs}) {
    padding: 0 1rem;
  }
`;

export default function Container({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
