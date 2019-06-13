import React from 'react'
import BlogCard from './BlogCard'
import bloglist from './bloglist.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import { Title } from '../../utils/Title'

const getPosts = graphql`
  query {
    posts: allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          publishDate(formatString: "MMMM Y D")
          createdAt(formatString: "LLLL")
          title
          slug
          id: contentful_id
          heroImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)
  console.log(posts)
  return (
    <section className={bloglist.blog}>
      <Title title="Bailee Blog" />
      <div className={bloglist.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
