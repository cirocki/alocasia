import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const ContactPage = () => {
  return (
    <Layout>
      <SEO description title="Contact" />
      <main>
        <title>Contact page</title>
        <h1>Contact example page</h1>
      </main>
    </Layout>
  );
};

export default ContactPage;
