import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import get from 'lodash/get'

import Hero from '../components/hero'
import Layout from '../components/layout'
import SEO from '../components/SEO'

import { Title } from '../utils'

import img from '../images/bcg/homeBcg.jpeg'

//Sections
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import Form from '../components/HomePageComponents/Form'
import FeaturedBusiness from '../components/HomePageComponents/FeaturedBusiness'

import AppFeatures from '../components/HomePageComponents/AppFeatures'

import { HomeHeader, Banner, BannerButton, BusinessCard } from '../utils'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <SEO title="Home" description="welcome to bailee" />
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
        <FeaturedBusiness />
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
  }
`
