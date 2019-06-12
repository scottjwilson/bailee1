import React, { Component } from 'react'
import Layout from '../components/layout'
import StyledHero from '../components/StyledHero'
import Businesses from '../components/Businesses/Businesses'
import { graphql } from 'gatsby'

export default class businesses extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />

        <Businesses />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
