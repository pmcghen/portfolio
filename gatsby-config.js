module.exports = {
  siteMetadata: {
    siteUrl: "https://portfoliomain32081.gatsbyjs.io/",
    title: "Pat McGhen",
    description: "Cat lover. Cyclist. Pizzaiolo. Web developer."
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
        `Rubik`,
        `Ubuntu`,
        ],
        display: 'swap'
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
