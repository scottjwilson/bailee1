import React, { Component } from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Businesses from '../components/Businesses/Businesses'
import { graphql } from 'gatsby'

export default class businesses extends Component {
  render() {
    return (
      <Layout>
        <Hero />
        <Businesses />
      </Layout>
    )
  }
}
