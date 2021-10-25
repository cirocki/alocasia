import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout/layout";

const StyledHeader = styled.header`
  background: blue;
`;
// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <StyledHeader>
          <h1>header</h1>
        </StyledHeader>
        <title>Alocasia Theme</title>
        <h1>home</h1>
      </main>
    </Layout>
  );
};

export default IndexPage;
