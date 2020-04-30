const title = 'GDG Roma';
const description = 'The official GDG Roma website';
const author = 'Lorenzo Franceschini';

module.exports = {
  siteMetadata: {
    title: title,
    description: description,
    author: author,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-sharp`,
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
  ],
};
