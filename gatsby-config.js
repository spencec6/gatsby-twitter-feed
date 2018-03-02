module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-source-twitter`,
      options: {
        q: `from:teachingcom`,
        credentials: {
          consumer_key: "Xx7zkqti5SxlAreQWOnw9UPYV",
          consumer_secret: "Ukx25jzOwlX48yY6qMvRLIFvmiA3HqBHW38n66pHVL2PFaAwEh",
          bearer_token:
            "AAAAAAAAAAAAAAAAAAAAAKtw4gAAAAAAd%2FdtPG6d0CM07H1jfpGLgtB70iI%3DjnKloE6iXnfmn3kAsE6epm3Bbh6hyOzHvHJ8OcgvoYYR6btVCm"
        },
        tweet_mode: "extended"
      }
    }
  ]
};
