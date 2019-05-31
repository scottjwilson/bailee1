import React from 'react'
import styled from 'styled-components'
import { mainstyles } from '../utils'

export function Title({ title, message }) {
  return (
    <TitleWrapper>
      <h1 className="title">{title}</h1>
      {/* <div className="underline" /> */}
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
 text-align: center;
  ${mainstyles.letterSpacing({ spacing: '.3rem' })};

  .title{
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(to right, #cb322b, #481e20);
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: 2px;
    transition: all .2s;
}
    font-size: 2rem;
    text-transform: uppercase;

  }
  .underline {
    width: 5rem;
    height: 0.2rem;
    margin: 1rem auto;
    background: ${mainstyles.colors.mainBlack};
  }
`

Title.defaultProps = {
  title: 'default title',
}
