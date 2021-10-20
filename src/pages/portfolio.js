import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import '../scss/style.scss';

const BlogPage = ({ data }) => {
  return(
    <Layout pageTitle="My Work">
      <h2>My Work</h2>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.name}>
            <header>
              <h3>{node.frontmatter.title}</h3>
              <span>Posted: {node.frontmatter.date}</span>
            </header>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
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
      slug
      frontmatter {
        title
        date
      }
      excerpt
      body
    }
  }
}`;

export default BlogPage;