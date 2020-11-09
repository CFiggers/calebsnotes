module.exports = {
  siteMetadata: {
    title: "Caleb's Notes",
  },
  plugins: [
    {
      resolve: "gatsby-theme-andy",
      options: {},
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-180311768-1",
      },
    },
  ],
};
