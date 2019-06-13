import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import blogstyle from './blog-template.module.css'

const Blog = ({ data }) => {
  const {
    title,
    publishDate,
    richbody: { json },
  } = data.post
  console.log(title)

  return (
    <Layout>
      <section className={blogstyle.blog}>
        <div className={blogstyle.center}>
          <h1>{title}</h1>
          <h4>Published at : {publishDate}</h4>
          <article className={blogstyle.post}>
            {documentToReactComponents(json)}
          </article>
        </div>
        <AniLink fade to="/blog" className="btn-primary">
          all posts
        </AniLink>
      </section>
    </Layout>
  )
}

//have to set variable in graphql first? getPost
export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      richbody {
        json
      }
    }
  }
`
export default Blog
