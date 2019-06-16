import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { graphql } from 'gatsby'
import BlogList from '../components/Blog/BlogList'
import SEO from '../components/SEO'

const blog = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Blogs"
        description="black owned business directory blog bailee"
      />
      <Hero img={data.blogbg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  )
}

export const query = graphql`
  query {
    blogbg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

export default blog
