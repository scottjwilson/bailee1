import React, { Component } from 'react'
import styled from 'styled-components'
import img from 'gatsby-image'
import { mainstyles } from '../utils'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: 'https://instagram.com',
      },
      {
        id: 2,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: 'https://facebook.com',
      },
      {
        id: 3,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: 'https://twitter.com',
      },
    ],
  }

  render() {
    return (
      <FooterWrapper>
        <div className="title">Bailee</div>
        <div className="icons">
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="copyright">Copyright 2019 Bailee</p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  flex-shrink: 0;
  padding: 2rem 0;
  background: ${mainstyles.colors.mainBlack};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${mainstyles.colors.mainWhite};
    font-size: 1.3rem;
    ${mainstyles.transition({})};
    &:hover {
      color: ${mainstyles.colors.mainRed};
    }
  }

  .copyright {
    color: ${mainstyles.colors.mainWhite};
    text-align: center;
    margin: 1rem auto;
    text-transform: capitalize;
  }

  .title {
    text-align: center;
    width: 10rem;
    color: ${mainstyles.colors.mainWhite};
    margin: 0 auto 2rem auto;
    padding: 0.4rem 1rem;
    font-size: 1.35rem;
  }
`
