import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FaAlignRight } from 'react-icons/fa'
import styled from 'styled-components'

import Brand from './Brand'
import { mainstyles } from '../../utils'

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <Brand />
        </Link>

        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggle-icon {
    color: ${mainstyles.colors.mainYellow};
    font-size: 1.75rem;
    cursor: pointer;

    &:active {
      transform: translateY(3px);
      ${mainstyles.transObject({ time: '.2s' })}
    }

    @media (min-width: 768px) {
      display: none;
    }
  }

  img {
    height: 50px;
  }
`
