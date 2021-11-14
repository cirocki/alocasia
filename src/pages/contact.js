import * as React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo/Seo";

const ContactPage = () => {
  return (
    <Layout>
      <Seo description="contact desc" title="Contact" />
      <main>
        <title>Contact page</title>
        <h1>Contact example page</h1>
      </main>
    </Layout>
  );
};

export default ContactPage;
