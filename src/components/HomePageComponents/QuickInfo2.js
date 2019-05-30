import React, { Component } from 'react'
import styled from 'styled-components'
import { styles, Section, Title, SectionButton } from '../../utils'
import { graphql, Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import tw from 'tailwind.macro'

import {
  MdZoomOutMap,
  MdChatBubbleOutline,
  MdShare,
  MdBusinessCenter,
  MdMonetizationOn,
} from 'react-icons/md'

export default function QuickInfo2({ data }) {
  return (
    <StaticQuery
      query={graphql`
        {
          img1: file(relativePath: { eq: "baileeapp800.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <QuickInfoWrapper>
          <Section>
            <Title title="What it can do for you" />
            <Container>
              <ColumnLeft>
                <Card>
                  <CardBody>
                    <MdZoomOutMap className="i" />
                    Browse by category locate local black owned businesses
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <MdChatBubbleOutline className="i i2" />
                    Contact business directly by phone or instant chat
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <MdShare className="i i3" />
                    Share and Favorite business
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <MdBusinessCenter className="i i4" />
                    Simple profile creation for business owners and customers
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <MdMonetizationOn className="i i5" />
                    Grow your network and help other black business thrive
                  </CardBody>
                </Card>
              </ColumnLeft>
              <ColumnRight>
                <Img fluid={data.img1.childImageSharp.fluid} />
              </ColumnRight>
            </Container>
          </Section>
        </QuickInfoWrapper>
      )}
    />
  )
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 4rem auto;
 

  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
    ul {
        list-style:none;
        font-size: .9rem;
    }
  }

  @media (min-width: 768px) {
    width: 70%;
}

@media (min-width: 992px) {
    width: 70%;
}

`

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-gap: 30px;

  @media (min-width: 900px) {
    grid-template-rows: repeat(2, 280px);
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
  }
`

const ColumnLeft = styled.div`
  color: white;

  @media (min-width: 1600px) {
    padding-left: 5rem;
  }

  ul {
    margin-top: 2rem;
  }

  li {
    color: ${styles.colors.mainBlack};
    font-size: 1rem;
    line-height: 1.7rem;
  }
`

const ColumnRight = styled.div`
  margin-bottom: 3rem;
  font-size: 1rem;
`

const Card = styled.div`
 
  padding: 3rem;
  background-color: #dcdfe2;
  color:black;

  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
  }
  

  .i {
   font-size: 2rem;
   margin-right: 1rem;
   color: blue;
    
   font-weight: 800;
  }

  .i2 {
    color: ${styles.colors.mainRed};
  }

  .i3 {
    color: green;
  }

  .i4 {
    color: purple;
  }

  .i5 {
    color: orange;
  }

`

const CardBody = styled.div`
  display: flex;
`
