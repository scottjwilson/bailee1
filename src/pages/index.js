import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import img from '../images/bcg/homeBcg.jpeg'

//Sections
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import QuickInfo2 from '../components/HomePageComponents/QuickInfo2'
import Form from '../components/HomePageComponents/Form'

import { HomeHeader, Banner, BannerButton } from '../utils'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <HomeHeader img={img}>
          <Banner
            title="the bailee app"
            subtitle="The Black American & International Listings of Eager Entrepreneurs"
          >
            <BannerButton style={{ margin: '2rem auto' }}>
              Download
            </BannerButton>
          </Banner>
        </HomeHeader>
        <QuickInfo />
        <QuickInfo2 />
        <Form />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
