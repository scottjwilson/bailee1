import React from 'react'
import BusinessList from './BusinessList'
import { useStaticQuery, graphql } from 'gatsby'

const getBusinesses = graphql`
  query {
    businesses: allContentfulBusiness {
      edges {
        node {
          name
          description
          category
          location
          slug
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const Businesses = () => {
  const { businesses } = useStaticQuery(getBusinesses)
  return (
    <div>
      <BusinessList businesses={businesses} />
    </div>
  )
}

export default Businesses
