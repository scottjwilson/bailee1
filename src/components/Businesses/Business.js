import React from 'react'
import Image from 'gatsby-image'

import { FaMap } from 'react-icons/fa'

import bizstyle from './bizstyle.module.css'
import propTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'

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
      <Link to={`/businesses/${slug}`} className={bizstyle.biglink}>
        <div className={bizstyle.imagecontainer}>
          <Image
            fluid={mainImage}
            className={bizstyle.img}
            alt="single business"
          />
        </div>
        <div className={bizstyle.footer}>
          <div className={bizstyle.name}>{name}</div>
          <div className={bizstyle.description}>{description}</div>
          <div className={bizstyle.info}>
            <h4 className={bizstyle.country}>
              <FaMap className={bizstyle.icon} />
              {location || 'default location'}
            </h4>
            <div className={bizstyle.details}>
              <h6>{category}</h6>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

Business.propTypes = {
  business: propTypes.shape({
    name: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    images: propTypes.arrayOf(propTypes.object).isRequired,
  }),
}

export default Business
