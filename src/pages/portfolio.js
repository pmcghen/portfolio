import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import '../scss/style.scss';

const BlogPage = ({ data }) => {
  return(
    <Layout pageTitle="My Work">
      <h2>My Work</h2>
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  );
};

export const query = graphql`
 query {
   allFile {
    nodes {
      name
    }
  }
}`;

export default BlogPage;