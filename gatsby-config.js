module.exports = {
  siteMetadata: {
    title: "Caleb's Notes",
    siteUrl: "https://calebsnotes.com",
    url: "https://calebsnotes.com",
    description:
      "Hi, I'm Caleb. I make notes about things. I hope you find them helpful!",
    image:
      "https://raw.githubusercontent.com/CFiggers/images-calebsnotes/master/CalebsNotes%20Screenshot%202020-11-30%20222315_crop3.PNG",
    twitterUsername: "@CalebFiggers",
  },
  plugins: [
    {
      resolve: "gatsby-theme-andy",
      options: {},
    },
    {
        resolve: "gatsby-plugin-manifest",
        options: {
                name: "Caleb's Notes",
                short_name: "Caleb's Notes",
                start_url: "/",
                background_color: "#18295a",
                theme_color: "#8ce1fb",
                display: "standalone",
                icon: "static/CN_Favicon.png"
            },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-180311768-1",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
  ],
};
