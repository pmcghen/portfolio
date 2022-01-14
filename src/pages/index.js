import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import HomepageCard from '../components/homepage-card';

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Pat McGhen">
      <h2>Hi there!</h2>
      <p>
        I'm a front end web developer with 15+ years of commitment to helping clients reach their
        goals and keeping internal teams communicating effectively and running smoothly. If you
        take a look around you'll find some of my recent work. You can also check out
        my <a href="https://github.com/pmcghen">GitHub</a> and <a href="https://linkedin.com/in/pmcghen">LinkedIn</a> pages for more.
      </p>
      <p>
        That's not the whole story though, is it? When I'm offline, I like to <em>really</em>  get
        offline. I'm an avid cyclist, bikepacker, hiker, and general adventurer. While I'm recovering
        from all that, I'm usually in the kitchen, or reading with my cats.
      </p>
      <h2>Latest work</h2>
      <div className='flex card-container'>
        {
          data.allMdx.nodes.map(node => (
            <HomepageCard
              key={node.id}
              img={node.frontmatter.hero_image}
              alt={node.frontmatter.hero_image_alt}
              link={`/portfolio/${node.slug}`}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
 query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      frontmatter {
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      slug
    }
  }
}`;

export default IndexPage;
