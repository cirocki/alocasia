import * as React from "react";
import styled from "styled-components";
import Container from "../components/layout/container/Container";
import Layout from "../components/layout/layout";
import Hero from "../components/layout/sections/hero/Hero";
import SEO from "../components/seo/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO description="Description" title="Homepage" />
      <main>
        <Hero />
      </main>
    </Layout>
  );
};

export default IndexPage;
