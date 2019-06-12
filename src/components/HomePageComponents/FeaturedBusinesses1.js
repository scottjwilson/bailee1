import React from 'react'
import Business from '../Businesses/Business'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Title } from '../../utils/Title'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

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

const FeaturedBusinesses1 = () => {
  const response = useStaticQuery(getBusinesses)
  const businesses = response.featuredBusinesses.edges

  return (
    <BusinessWrapper>
      <Title title="featured businesses" />

      <div className="center">
        {businesses.map(({ node }) => {
          return <Business key={node.contentful_id} business={node} />
        })}
      </div>
      <div className="centerbutton">
        <AniLink fade to="/businesses" className="btnprimary">
          {' '}
          All businesses{' '}
        </AniLink>
      </div>
    </BusinessWrapper>
  )
}

const BusinessWrapper = styled.section`
  padding: 4rem 0;
  text-align: center;

  .center {
    width: 80vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
  @media screen and (min-width: 978px) {
    .center {
      grid-template-columns: repeat(2, minmax(368.66px, 1fr));
    }
  }

  .centerbutton {
    width: 300px;
    margin: 0 auto;
  }
  .btnprimary {
    margin: 0 auto;
    background: linear-gradient(to right, #481e20 0%, #cb322b 100%);
    color: #fffdff;
    border: linear-gradient(to right, #481e20 0%, #cb322b 100%);
    padding: 1rem 0;
    display: inline-block;
    transition: all 0.3s linear;
    cursor: pointer;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 800;
    border-radius: 0.3rem;
  }

  .btnprimary:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  }
`

export default FeaturedBusinesses1
