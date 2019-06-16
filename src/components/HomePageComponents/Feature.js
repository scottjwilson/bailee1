import React from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'
import Img from 'gatsby-image'
import tw from 'tailwind.macro'

export default function Feature({ feature }) {
  const { name } = feature
  const { fixed } = feature.image
  return (
    <FeatureWrapper>
      <Card>
        <div className="icon">
          <Img fixed={fixed} />
        </div>
        <div className="text">{name}</div>
      </Card>
    </FeatureWrapper>
  )
}

const FeatureWrapper = styled.div``

const Card = styled.div`
  ${tw`p-4 m-4 md:m-6 shadow-md rounded`}

  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;

  background-color: #f7fafc;
  color: black;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }

  .text {
    display: flex;
    align-items: center;
    @media (min-width: 600px) {
      font-size: 1.2rem;
    }

    @media (min-width: 1000px) {
      justify-content: space-evenly;
    }
  }
`
