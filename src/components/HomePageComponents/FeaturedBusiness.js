import React from 'react'
import Business from '../Businesses/Business'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import featbiz from './featbiz.module.css'
import { Title } from '../../utils/Title'

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
      <Title title="featured businesses" />

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
