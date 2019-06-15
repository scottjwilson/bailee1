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

  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        return (
          <div className={blogstyle.rich}>
            <img width="400" src={node.data.target.fields.file['en-US'].url} />
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <section className={blogstyle.blog}>
        <div className={blogstyle.center}>
          <h1>{title}</h1>
          <h4>Published at : {publishDate}</h4>
          <article className={blogstyle.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className={blogstyle.btn}>
            all posts
          </AniLink>
        </div>
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
