import React from 'react'
import Business from '../Businesses/Business'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import featbiz from './featbiz.module.css'

const getBusinesses = graphql`
  query {
    featuredBusinesses: allContentfulBusiness(
      filter: { featured: { eq: true } }
    ) {
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

const FeaturedBusiness = () => {
  const response = useStaticQuery(getBusinesses)
  const businesses = response.featuredBusinesses.edges

  return (
    <section className={featbiz.businesses}>
      <h1>Featured</h1>

      <div className={featbiz.center}>
        {businesses.map(({ node }) => {
          return <Business key={node.contentful_id} business={node} />
        })}
      </div>
      <div>
        <AniLink fade to="/businesses">
          {' '}
          All businesses{' '}
        </AniLink>
      </div>
    </section>
  )
}

export default FeaturedBusiness
