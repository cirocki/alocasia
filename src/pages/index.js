import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout/layout";

const StyledHeading = styled.h1`
  font-family: ${(props) => props.theme.fonts.secondary};
`;
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>Alocasia Theme</title>
        <StyledHeading>Alocasia Theme Homepage</StyledHeading>
      </main>
    </Layout>
  );
};

export default IndexPage;
