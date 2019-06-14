import React from 'react'
import './navbar.css'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Image from './Image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default function Navbar() {
  return (
    <Navigation>
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label for="navi-toggle" className="navigation__button">
        <Image className="baileeappbutton" />
      </label>
      <div className="navigation__background" />
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <AniLink fade to="/" className="navigation__link">
              Home
            </AniLink>
          </li>
          <li className="navigation__item">
            <AniLink fade to="/businesses" className="navigation__link">
              Businesses
            </AniLink>
          </li>
          <li className="navigation__item">
            <AniLink fade to="/blogs" className="navigation__link">
              BLog
            </AniLink>
          </li>

          <li className="navigation__item">
            <a
              href="https://itunes.apple.com/us/app/the-bailee-app-llc/id1388392304?mt=8"
              className="navigation__link"
            >
              Download
            </a>
          </li>
        </ul>
      </nav>
    </Navigation>
  )
}

const Navigation = styled.div`
  /* font-family: 'Open Sans', sans-serif; */
  font-family: 'Dosis', sans-serif;
`
