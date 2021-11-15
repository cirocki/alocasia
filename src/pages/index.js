import * as React from "react";
import styled from "styled-components";
import Container from "../components/layout/container/Container";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const StyledHeading = styled.h1`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 8rem;
  margin-top: 40rem;
  margin-bottom: 40rem;
`;
const IndexPage = () => {
  return (
    <Layout>
      <SEO description="Description" title="Homepage" />
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
