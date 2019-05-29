import React from 'react'
import { Link } from 'gatsby'

import Navigation from './navigation'
import Navbar from './Navbar/Navbar'
import styled from 'styled-components'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Navbar />

        {children}
      </Container>
    )
  }
}

const Container = styled.div``

export default Template
