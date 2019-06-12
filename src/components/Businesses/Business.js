import React from 'react'
import Image from 'gatsby-image'

import { FaMap } from 'react-icons/fa'

import bizstyle from './bizstyle.module.css'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const getImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Business = ({ business }) => {
  const data = useStaticQuery(getImage)
  const img = data.file.childImageSharp.fluid
  const { name, description, category, location, images, slug } = business

  let mainImage = images ? images[0].fluid : img

  return (
    <article className={bizstyle.bizcard}>
      <div>
        <Image fluid={mainImage} alt="single business" />
      </div>
      <div>
        <p>{name}</p>
        <p>{description}</p>
        <div>
          <h4>
            <FaMap />
            {location}
          </h4>
          <div>
            <h6>{category}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

Business.PropTypes = {
  business: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default Business
