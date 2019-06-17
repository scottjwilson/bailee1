import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { graphql } from 'gatsby'
import ContactForm from '../components/Contact/contactform'

import SEO from '../components/SEO'

const contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="black owned business directory contact us"
      />

      <ContactForm />
    </Layout>
  )
}

export default contact
