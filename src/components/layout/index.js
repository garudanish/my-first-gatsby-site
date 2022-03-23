import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../../styles/normalize.scss";
import "../../styles/reset.scss";
import "./style.scss";
import GlobalHeader from "../global-header";
import Footer from "../footer";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="container">
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <GlobalHeader title={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
