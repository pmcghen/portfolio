import * as React from 'react';
import Layout from '../components/layout';

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1>Hi there! &nbsp;
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p>
        I'm a front end web developer with 15+ years of commitment to helping 
        clients reach their goals and keeping internal teams communicating 
        effectively and running smoothly.
      </p>
    </Layout>
  )
}

export default IndexPage
