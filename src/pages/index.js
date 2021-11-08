import * as React from "react";
import styled from "styled-components";
import Container from "../components/layout/container/Container";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const StyledHeading = styled.h1`
  font-family: ${(props) => props.theme.fonts.secondary};
`;
const IndexPage = () => {
  return (
    <Layout>
      <SEO description title="Homepage" />
      <main>
        <title>Alocasia Theme</title>
        <Container>
          <StyledHeading>Alocasia Theme Homepage</StyledHeading>
        </Container>
      </main>
    </Layout>
  );
};

export default IndexPage;
