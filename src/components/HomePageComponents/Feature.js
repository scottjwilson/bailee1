import React from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'
import Img from 'gatsby-image'

export default function Feature({ feature }) {
  const { name } = feature
  const { fixed } = feature.image
  return (
    <FeatureWrapper>
      <Img fixed={fixed} />
      <p>{name}</p>
    </FeatureWrapper>
  )
}

const FeatureWrapper = styled.div``
