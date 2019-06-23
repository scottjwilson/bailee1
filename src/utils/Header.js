import React from 'react'
import styled from 'styled-components'
import { mainstyles } from '../utils'

import img from '../images/bcg/homeBcg.jpeg'

function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

function PageHeader({ img, children }) {
  return <DefaultHeader img={img}>{children}</DefaultHeader>
}

function BlogHeader({ img, children }) {
  return <IndexBlogHeader img={img}>{children}</IndexBlogHeader>
}

const IndexHeader = styled.header`
  min-height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 90vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 90vh, 0 100%);

  @media (min-width: 800px) {
    background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.4)),
      url(${props => props.img}) center/cover fixed;
  }
`

const DefaultHeader = styled(IndexHeader)`
  background: ${mainstyles.gradients.redGrad},
    url(${props => props.img}) center/cover fixed no-repeat;
  min-height: 30vh;
`

const IndexBlogHeader = styled.header`
  background: ${mainstyles.gradients.redGrad} url(${props => props.img})
    center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`

HomeHeader.defaultProps = {
  img: img,
}

PageHeader.defaultProps = {
  img: img,
}

BlogHeader.defaultProps = {
  img: img,
}

export { HomeHeader, PageHeader, BlogHeader }
