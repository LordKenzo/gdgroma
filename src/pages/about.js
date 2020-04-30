import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <Link to="/">&larr; Back to Home</Link>
    </Layout>
  );
};

export default About;
