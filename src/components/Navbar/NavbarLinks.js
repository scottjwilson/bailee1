import React, { Component } from 'react'
import styled from 'styled-components'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { mainstyles, elevation } from '../../utils'
export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: '/',
        name: 'home',
      },
      {
        id: 1,
        path: '/businesses/',
        name: 'businesses',
      },
      {
        id: 2,
        path: '/blogs/',
        name: 'Blog',
      },
      {
        id: 3,
        path: '/blog/faq/',
        name: 'faq',
      },
      {
        id: 4,
        path: '/team/',
        name: 'meet the team',
      },
      {
        id: 5,
        path: '/contact/',
        name: 'contact',
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <AniLink paintDrip to={item.path} hex="#000" className="nav-link">
                {item.name}
              </AniLink>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  @media (min-width: 768px) {
    flex-direction: row;
    box-shadow: none;
  }

  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${mainstyles.colors.mainWhite};
    font-weight: 400;
    text-transform: uppercase;
    cursor: pointer;
    ${mainstyles.transDefault};

    &:hover {
      color: ${mainstyles.colors.mainRed};
      transform: translateY(-0.2rem);
    }
  }

  height: ${props => (props.open ? '250px' : '0px')};
  overflow: hidden;
  ${mainstyles.transObject({
    time: '.3s',
  })};

  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${mainstyles.colors.mainGrey3};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`
