import React, { Component } from 'react'
import Layout from '../components/layout'

import Businesses from '../components/Businesses/Businesses'
import { graphql } from 'gatsby'

export default class businesses extends Component {
  render() {
    return (
      <Layout>
        <Businesses />
      </Layout>
    )
  }
}
