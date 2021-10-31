import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import '../scss/style.scss';

const PortfolioPage = ({ data }) => {
  return (
    <Layout pageTitle="My Work">
      <h2>My Work</h2>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <header>
              <h3>
                <Link to={`/portfolio/${node.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h3>
              <span>{node.frontmatter.timeline}</span>
            </header>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  );
};

export const query = graphql`
 query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        timeline
      }
      excerpt
      slug
    }
  }
}`;

export default PortfolioPage;
