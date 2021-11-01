import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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

  return (
    <>
      <title>{pageTitle}</title>
      <header className="page-header around">
        <div class="flex">
          <StaticImage
            alt="Pat and B enjoying some offline time"
            src="../images/me.jpg"
            className="avatar" />
          <div>
            <h1><Link to="/">{data.site.siteMetadata.title}</Link></h1>
            <span className="tagline">{data.site.siteMetadata.description}</span>
          </div>
        </div>
        <div className="nav-container flex">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer className="page-footer">
        <a href="https://github.com/pmcghen"><FontAwesomeIcon icon={faGithub} aria-label="GitHub" /></a>
        <a href="https://linkedin.com/in/pmcghen"><FontAwesomeIcon icon={faLinkedin} aria-label="LinkedIn" /></a>
      </footer>
    </>
  );
};

export default Layout;
