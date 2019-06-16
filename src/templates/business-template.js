import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Img from 'gatsby-image'
import { FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import businesstemplate from './businesstemplate.module.css'

const Template = ({ data }) => {
  const { name, description, location, category, images } = data.biz
  const [mainImage, ...allImages] = images

  return (
    <Layout>
      <Hero img={mainImage.fluid} />
      <section className={businesstemplate.template}>
        <div className={businesstemplate.center}>
          <h1>{name}</h1>
          <div className={businesstemplate.info}>
            <p>
              <FaMap className={businesstemplate.icon} />
              {location}
            </p>
            <p>
              <FaMap className={businesstemplate.icon} />
              {category}
            </p>
          </div>

          <p className={businesstemplate.desc}>{description}</p>
          <div className={businesstemplate.images}>
            {allImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="single tour"
                  className={businesstemplate.image}
                />
              )
            })}
          </div>

          <AniLink
            fade
            to="/businesses"
            className={businesstemplate.btnprimary}
          >
            back to businesses
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    biz: contentfulBusiness(slug: { eq: $slug }) {
      name
      description
      location
      category
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
export default Template
