import React from 'react'
import styled from 'styled-components'
import { styles } from '../utils'

export default function Banner({ title, subtitle, children }) {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  .title {
    color: ${styles.colors.mainWhite};
    font-size: 3rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: '0.1rem' })}
  }

  .subtitle {
    color: ${styles.colors.mainWhite};
  }
`

Banner.defaultProps = {
  title: 'default title',
}
