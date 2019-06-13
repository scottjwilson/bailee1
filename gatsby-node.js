const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          query {
            businesses: allContentfulBusiness {
              edges {
                node {
                  slug
                }
              }
            }
            blogposts: allContentfulBlogPost {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.blogposts.edges
        const featuredBusiness = result.data.businesses.edges

        featuredBusiness.forEach(({ node }) => {
          createPage({
            path: `businesses/${node.slug}`,
            component: path.resolve('./src/templates/business-template.js'),
            context: {
              slug: node.slug,
            },
          })
        })

        posts.forEach(({ node }) => {
          createPage({
            path: `blog/${node.slug}`,
            component: path.resolve('./src/templates/blog-template.js'),
            context: {
              slug: node.slug,
            },
          })
        })
      })
    )
  })
}
