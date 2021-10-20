import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <h2>So here's the thing...</h2>
      <p>
        I'm pretty into &nbsp;
        <span role="img" aria-label="cats">🐈</span> &nbsp;
        <span role="img" aria-label="bikes">🚲</span> &nbsp;
        <span role="img" aria-label="pizza">🍕</span> &nbsp;
        <span role="img" aria-label="coffee">☕️</span> and &nbsp;
        <span role="img" aria-label="beer">🍺</span>.
      </p>
    </Layout>
  )
}

export default AboutPage;
