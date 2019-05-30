import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import tw from 'tailwind.macro'

const FeaturedBusinesses = ({ children, offset }) => (
  <>
    <Content>
      <Inner>{children}</Inner>
    </Content>
  </>
)

const Inner = styled.div`
  ${tw`w-full xxl:w-2/3 text-center lg:text-left`};
`

const Content = styled.div`
  ${tw`p-4 md:p-12 lg:px-24  justify-center items-center flex z-50`};
`

export default FeaturedBusinesses

FeaturedBusinesses.propTypes = {
  children: PropTypes.node.isRequired,
}
