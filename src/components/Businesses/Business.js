import React from 'react'
import Image from 'gatsby-image'

import { FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'
import tw from 'tailwind.macro'
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
    <Wrapper>
      <div className="img-container">
        <Image fluid={mainImage} className="img" alt="single business" />
      </div>
      <div className="footer">
        <p className="title">{name}</p>
        <p className="description">{description}</p>
        <div className="info">
          <h4 className="country">
            <FaMap className="icon" />
            {location || 'default location'}
          </h4>
          <div className="details">
            <h6>{category}</h6>
          </div>
        </div>
      </div>
      <AniLink fade to={`/businesses/${slug}`} />
    </Wrapper>
  )
}

const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 my-4 text-white w-full`};
  background: linear-gradient(to bottom, #42393d 65%, #242223 100%);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);

    background: linear-gradient(to bottom, #242223 75%, #242223 100%);
  }
  .img-container {
    transition: all 0.3s linear;
    display: flex;
    justify-content: center;
    flex-direction: space-bet;
    margin: 0 auto;
  }
  .img {
    border-radius: 9999px;
    width: 8rem;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
      0 5px 15px 0 rgba(0, 0, 0, 0.08);

    height: auto;
    transition: all 0.3s linear;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #fffdff;
    border: 2px solid #fffdff;
    padding: 0.5rem 0.7rem;
    display: inline-block;
    transition: all 0.3s linear;
    cursor: pointer;
  }
  .link:hover {
    background: #fffdff;
    color: #cb322b;
  }
  .img-container:hover .link {
    opacity: 1;
  }

  .footer {
    padding: 1rem;
    text-align: left;
  }
  .footer h3 {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-transform: uppercase;
    align-items: center;
    margin-top: 0.5rem;
  }
  .info h6,
  .info h4 {
    margin-bottom: 0;
  }
  .country {
    text-transform: capitalize;
    color: #cb322b;
    display: flex;
    align-items: center;
  }
  .icon {
    margin-right: 0.4rem;
  }
  .details {
    color: #fff;
    text-transform: uppercase;
    text-align: right;
  }
`

// const Text = styled.div`
//   ${tw`flex justify-center opacity-75 font-sans text-md md:text-base text-white py-4`};
//   text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
// `

// const Title = styled.div`
//   ${tw`flex justify-center text-white uppercase text-2xl tracking-wide font-sans py-4`};
//   text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
// `

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
