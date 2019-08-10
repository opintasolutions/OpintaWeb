module.exports = {
  siteMetadata: {
    title: `Opinta Solutions`,
    description: `Get IT support and services for your business. we offer web development, digital marketing, android development, custom software development & More.`,
    author: `@opintasolutions`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#532CA2`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: "learntogrow.in",
        protocol: "http",
        hostingWPCOM: false,
        verboseOutput: false,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        // normalizer: function({ entities }) {
        //   return entities
        // },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `opinta-solutions`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#532CA2`,
        theme_color: `#532CA2`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
