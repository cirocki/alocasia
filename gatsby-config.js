module.exports = {
  siteMetadata: {
    titleTemplate: "%s | Alocasia Starter Theme",
    description: "Gatsby.js custom starter theme.",
    url: "https://cirocki.pl", // No trailing slash allowed!
    image: "/snape.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
    title: "Title from config",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Open Sans",
            weights: ["100", "400", "500", "700"],
          },
          {
            family: "Playfair Display",
            weights: ["400, 700"],
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
