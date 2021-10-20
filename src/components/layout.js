import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import '../scss/style.scss';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return(
    <>
      <title>{ pageTitle }</title>
      <header className="page-header around">
        <div>
          <h1>{data.site.siteMetadata.title}</h1>
          <span className="tagline">{data.site.siteMetadata.description}</span>
        </div>
        <div className="nav-container flex">
          <StaticImage 
            alt="Pat and B enjoying some offline time" 
            src="../images/me.jpg"
            className="avatar" />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </header>
      <main>
        { children }
      </main>
    </>
  );
};

export default Layout;
