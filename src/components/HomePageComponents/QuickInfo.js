import React, { Component } from 'react'
import styled from 'styled-components'
import { mainstyles, Section, Title, SectionButton } from '../../utils'
import { Link } from 'gatsby'

export default class QuickInfo2 extends Component {
  render() {
    return (
      <QuickInfoWrapper>
        <Section>
          <Title title="What's the bailee app?" />

          <p className="text">
            The Bailee App stands for ‘’The Black American & International
            Listings of Eager Entrepreneurs’’ — A global network of black owned
            businesses. We’ve designed the ultimate app that helps black owned
            businesses: Grow, build rapports with customers and stay connected
            with the people that matter the most! Our app helps consumers locate
            amazing black owned restaurants, inspiring life coaches or engaging
            personal trainers. We want people to be able to find all of these
            and more on our app. Our mission is to help black owned businesses
            thrive.
          </p>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            {' '}
          </Link>
        </Section>
      </QuickInfoWrapper>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;

  .text {

    line-height: 2rem;
    color: ${mainstyles.colors.mainBlack}
    word-spacing: 0.2rem;
  }


  @media (min-width: 768px) {
    width: 70%;
}

@media (min-width: 992px) {
    width: 70%;
}

`
