import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './navbar.module.css'
const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        appButton: contentfulNav {
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        style={{
          borderRadius: 50,
          boxShadow: '0 1rem 3rem rgba(238, 232, 170, 0.6)',
        }}
        fluid={data.appButton.image.fluid}
      />
    )}
  />
)
export default Image
