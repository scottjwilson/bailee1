import React from 'react'

import Navbar from './Navbar/Navbar'
import Sidebar from './Navbar/Sidebar'

import GlobalStyle from '../styles/global'
import Footer from './footer'

export default class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <>
        <GlobalStyle />
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        {children}
        <Footer />
      </>
    )
  }
}

export const query = graphql`
  query HeadingQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
