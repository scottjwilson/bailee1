import React, { Component } from 'react'
import bizlist from './bizlist.module.css'

import Business from './Business'
import { Title } from '../../utils/Title'

export default class BusinessList extends Component {
  state = {
    businesses: [],
    sortedBusinesses: [],
  }

  componentDidMount() {
    this.setState({
      businesses: this.props.businesses.edges,
      sortedBusinesses: this.props.businesses.edges,
    })
  }

  render() {
    return (
      <section className={bizlist.businesses}>
        <Title title="our businesses" />
        <div className={bizlist.center}>
          {this.state.sortedBusinesses.map(({ node }) => {
            return <Business key={node.contentful_id} business={node} />
          })}
        </div>
      </section>
    )
  }
}
