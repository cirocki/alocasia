import * as React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const ContactPage = () => {
  return (
    <Layout>
      <SEO description="contact desc" title="Contact" />
      <main>
        <h1>Contact example page</h1>
      </main>
    </Layout>
  );
};

export default ContactPage;
