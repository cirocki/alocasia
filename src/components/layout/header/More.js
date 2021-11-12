import React from "react";
import styled from "styled-components";

const StyledPhoneWrapper = styled.div`
  display: flex;
  padding: 2rem 0;
  @media (${(props) => props.theme.max.md}) {
    width: 100%;
  }
`;
export default function More() {
  return (
    <StyledPhoneWrapper>
      <a href="tel:+48737475758">Call Us: 737 475 758</a>
    </StyledPhoneWrapper>
  );
}
