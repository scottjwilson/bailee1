require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
})
module.exports = {
  siteMetadata: {
    title: 'Bailee App',
    description:
      'The Black American and International Listings of Eager Entrepreneurs. A global network of black owned businesses',
    author: '@swolecoder',
    twitterUsername: '@thebaileeapp',
    image: '/defaultBcg.jpeg',
    siteUrl: 'https://baileeapp.com',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://baileeapp.com',
        sitemap: 'https://baileeapp.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://thebaileeapp.us18.list-manage.com/subscribe/post?u=6f7ee1c367a5b27d8391cb2c5&amp;id=d6bb89b754',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-116132710-1',
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Dosis`,
            variants: [`300`, `400`, `500`, `600`],
            subsets: [`latin`],
          },

          {
            family: 'Roboto',
            variants: [`300`, `400`, `500`, `600`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
  ],
}
