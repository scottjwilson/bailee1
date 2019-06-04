import React, { Component } from 'react'
import styled from 'styled-components'

import Feature from './Feature'
import { mainstyles, Section, Title, SectionButton } from '../../utils'
import { graphql, Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const FEATURES = graphql`
  {
    items: allContentfulFeatures {
      edges {
        node {
          name
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

export default function AppFeatures() {
  return (
    <Section>
      <Title title="What it can do for you" />
      <FeaturedList>
        <StaticQuery
          query={FEATURES}
          render={data => {
            const featured = data.items.edges
            return featured.map(item => {
              return <Feature key={item.node.id} feature={item.node} />
            })
          }}
        />
      </FeaturedList>
    </Section>
  )
}

const FeaturedList = styled.div`
  width: 90%;
  margin: 1rem auto;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 70%;
  }
`
