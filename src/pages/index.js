import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'

import { Title } from '../utils'

import img from '../images/bcg/homeBcg.jpeg'

//Sections
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import Form from '../components/HomePageComponents/Form'
import FeaturedBusinesses1 from '../components/HomePageComponents/FeaturedBusinesses1'

import AppFeatures from '../components/HomePageComponents/AppFeatures'

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

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <HomeHeader img={img}>
          <Banner
            title="the bailee app"
            subtitle="The Black American & International Listings of Eager Entrepreneurs"
          >
            <BannerButton style={{ margin: '2rem auto' }}>
              <Download href="https://itunes.apple.com/us/app/the-bailee-app-llc/id1388392304?mt=8">
                Download
              </Download>
            </BannerButton>
          </Banner>
        </HomeHeader>
        <QuickInfo />
        <FeaturedBusinesses1 />

        <AppFeatures />
        <Form />
      </Layout>
    )
  }
}

const Download = styled.a`
  color: white;
`

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
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
