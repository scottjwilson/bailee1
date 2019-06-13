import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { graphql } from 'gatsby'
import BlogList from '../components/Blog/BlogList'

const blog = ({ data }) => {
  return (
    <Layout>
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
