import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Img from 'gatsby-image'
import { FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import businesstemplate from './businesstemplate.module.css'
import SEO from '../components/SEO'
import { BannerButton } from '../utils/'

const Template = ({ data }) => {
  const { name, description, link, location, category, images } = data.biz
  const [mainImage, ...allImages] = images

  return (
    <Layout>
      <SEO title={name} />
      <Hero img={mainImage.fluid} />
      <section className={businesstemplate.template}>
        <div className={businesstemplate.center}>
          <h1>{name}</h1>
          <div className={businesstemplate.info}>
            <p>{category}</p>
            <p>
              <FaMap className={businesstemplate.icon} />
              {location}
            </p>
          </div>

          <p className={businesstemplate.desc}>{description}</p>

          <div className={businesstemplate.linkwrapper}>
            <div className={businesstemplate.btnprimary}>
              <a href={link}>Visit Business</a>
            </div>
          </div>

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
          <div className={businesstemplate.btnwrapper}>
            <AniLink
              fade
              to="/businesses"
              className={businesstemplate.btnprimary}
            >
              back to businesses
            </AniLink>
          </div>
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
      link
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
