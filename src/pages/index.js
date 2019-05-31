import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'

import { Title } from '../utils'

import img from '../images/bcg/homeBcg.jpeg'

import tw from 'tailwind.macro'

//Sections
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import QuickInfo2 from '../components/HomePageComponents/QuickInfo2'
import Form from '../components/HomePageComponents/Form'
import FeaturedBusinesses from '../components/HomePageComponents/FeaturedBusinesses'

import avatar1 from '../images/avatar1.jpg'

import {
  mainstyles,
  HomeHeader,
  Banner,
  BannerButton,
  BusinessCard,
} from '../utils'

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
        <FeaturedBusinesses>
          <Title title="Featured Businesses" />
          <BusinessCard
            title="Frenchie Lamont"
            link="#"
            bg={mainstyles.gradients.redGrad}
            text="test"
          >
            <Avatar src={avatar1} alt="John Doe" />
            <BusinessDescription>
              A graphic designer that offers high quality custom t-shirts. I
              also create logos for your personal and business needs
            </BusinessDescription>
          </BusinessCard>
          <BusinessCard
            title="Frenchie Lamont"
            link="#"
            bg={mainstyles.gradients.redGrad}
            text="test"
          >
            <Avatar src={avatar1} alt="John Doe" />
            <BusinessDescription>
              A graphic designer that offers high quality custom t-shirts. I
              also create logos for your personal and business needs
            </BusinessDescription>
          </BusinessCard>
          <BusinessCard
            title="Frenchie Lamont"
            link="#"
            bg={mainstyles.gradients.redGrad}
            text="test"
          >
            <Avatar src={avatar1} alt="John Doe" />
            <BusinessDescription>
              A graphic designer that offers high quality custom t-shirts. I
              also create logos for your personal and business needs
            </BusinessDescription>
          </BusinessCard>
        </FeaturedBusinesses>
        <QuickInfo2 />
        <Form />
      </Layout>
    )
  }
}

const BusinessDescription = styled.p`
  ${tw`py-6`}
`
const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`
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
