import React, { Component } from 'react'
import styled from 'styled-components'
import { mainstyles, Section, Title, Banner, PageHeader } from '../../utils'
import { Link } from 'gatsby'
import img from '../../images/bcg/homeBcg.jpeg'

const Posts = ({ children }) => (
  <>
    <PageHeader img={img}>
      <Banner title="Blog" />
    </PageHeader>
    <BlogWrapper>
      <Section>
        <Title title="Recent Posts" />

        {children}
      </Section>
    </BlogWrapper>
  </>
)

export default Posts

const BlogWrapper = styled.div`
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
