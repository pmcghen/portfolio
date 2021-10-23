module.exports = {
  siteMetadata: {
    siteUrl: "https://portfoliomain32081.gatsbyjs.io/",
    title: "Pat McGhen - Web Developer",
    description: "My website, now on Gatsby."
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `portfolio`,
        path: `${__dirname}/portfolio`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
