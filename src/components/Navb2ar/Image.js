import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './navbar.css'
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
      <Img className="baileeappbutton" fluid={data.appButton.image.fluid} />
    )}
  />
)
export default Image
