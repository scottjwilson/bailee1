import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Link, { graphql } from 'gatsby'
import ContactForm from '../components/Contact/contactform'
import styled from 'styled-components'

import SEO from '../components/SEO'

const privacy = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Statement"
        description="best black owned business directory bailee businesses"
      />

      <Wrapper>
        Hi these are the terms
        <SectionsList>
          <Item>Hi</Item>
          <Item>Hi</Item>
          <Item>Hi</Item>
        </SectionsList>
        <Priv>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          sit sint perspiciatis commodi voluptatum eum, minima modi quod impedit
          rerum. Obcaecati, accusantium pariatur. Tempore doloremque ut
          molestiae, assumenda ipsa odio, nemo, cupiditate perferendis ex dicta
          enim suscipit quibusdam eligendi! At fuga laudantium quia debitis
          fugiat tenetur veritatis beatae assumenda animi?
        </Priv>
      </Wrapper>
    </Layout>
  )
}

export default privacy

const Wrapper = styled.div`
  width: 70vw;
  margin: 0 auto;
`

const SectionsList = styled.ul`
  list-style: none;
  display: flex;
`

const Item = styled.li`
  font-weight: 400;
  margin: 1rem;
`

const Priv = styled.div``
