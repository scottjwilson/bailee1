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
import Form from '../components/HomePageComponents/Form'
import FeaturedBusinesses from '../components/HomePageComponents/FeaturedBusinesses'
import AppFeatures from '../components/HomePageComponents/AppFeatures'

import avatar1 from '../images/avatar1.jpg'
import avatar2 from '../images/avatar2.png'
import avatar3 from '../images/avatar3.jpg'
import avatar4 from '../images/avatar4.jpg'

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
        <FeaturedBusinesses>
          <Title title="Featured Businesses" />
          <BusinessCard
            title="Frenchie Lamont"
            link="#"
            bg={mainstyles.gradients.redGrad}
            text="test"
          >
            <Avatar src={avatar3} alt="Frenchie Lamont" />
            <BusinessDescription>
              A graphic designer that offers high quality custom t-shirts. I
              also create logos for your personal and business needs
            </BusinessDescription>
          </BusinessCard>
          <BusinessCard
            title="One Love Custom Apparel"
            link="#"
            bg={mainstyles.gradients.blackGrad}
            text="test"
          >
            <Avatar src={avatar1} alt="One Love Custom Apparel" />
            <BusinessDescription>
              Your premier full service custom t-shirt screen priting provider.
              We also printer on mugs, hats, and shot glasses.
            </BusinessDescription>
          </BusinessCard>
          <BusinessCard
            title="Yeyo 2 Yaya"
            link="#"
            bg={mainstyles.gradients.redGrad}
            text="test"
          >
            <Avatar src={avatar4} alt="Yeyo 2 Yaya" />
            <BusinessDescription>
              Birth and postpartum Doula services, womb stimulation, placenta
              encapsulation
            </BusinessDescription>
          </BusinessCard>
          <BusinessCard
            title="Martous Naturals"
            link="#"
            bg={mainstyles.gradients.blackGrad}
            text="test"
          >
            <Avatar src={avatar2} alt="Martous Naturals" />
            <BusinessDescription>
              A family owned natural products company located in Atlanta,
              Georgia. Our products include handmade soaps, lotions, and sugar
              scrubs for women and men.
            </BusinessDescription>
          </BusinessCard>
        </FeaturedBusinesses>

        <AppFeatures />
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
