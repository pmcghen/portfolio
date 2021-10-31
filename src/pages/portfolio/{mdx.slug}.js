import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';

const PortfolioPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  const tags = data.mdx.frontmatter.tags;
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <h2>{data.mdx.frontmatter.title}</h2>
      <span>{data.mdx.frontmatter.timeline}</span>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
      <footer>
        <span className="details">Technologies used:</span>
        {tags.map((tag) => {
          return [
            <span key={tag} className="tag">{tag}</span>
          ]
        })}
      </footer>
    </Layout>
  )
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        timeline
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        tags
      }
      body
    }
  }
`;

export default PortfolioPost;
