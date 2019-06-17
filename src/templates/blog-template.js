import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import blogstyle from './blog-template.module.css'
import SEO from '../components/SEO'
import { DiscussionEmbed } from 'disqus-react'

const Blog = ({ data, pageContext }) => {
  const {
    title,
    publishDate,
    richbody: { json },
  } = data.post

  const baseUrl = 'https://bailee.netlify.com'

  const disqusShortname = 'bailee-1'
  const disqusConfig = {
    identifier: pageContext.slug,
    title: title,
    url: baseUrl + pageContext.slug,
  }

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
      <SEO title={title} />
      <section className={blogstyle.blog}>
        <div className={blogstyle.center}>
          <h1>{title}</h1>
          <h4>Published at : {publishDate}</h4>
          <article className={blogstyle.post}>
            {documentToReactComponents(json, options)}
          </article>
          <div className={blogstyle.btnwrapper}>
            <AniLink fade to="/blogs" className={blogstyle.btnprimary}>
              all posts
            </AniLink>
          </div>
        </div>
        <div className={blogstyle.center}>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
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
      slug
      publishDate(formatString: "MMMM Do, YYYY")
      richbody {
        json
      }
    }
  }
`
export default Blog
