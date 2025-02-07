import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet>
      <title>Dennis | Portfolio</title>
      <meta name="description" content="Full-stack developer portfolio showcasing projects and skills in React, Node.js, and Three.js" />
      <meta name="keywords" content="portfolio, web development, full-stack, React, Node.js, Three.js" />
      <meta property="og:title" content="Dennis | Portfolio" />
      <meta property="og:description" content="Full-stack developer portfolio showcasing projects and skills" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEO;
