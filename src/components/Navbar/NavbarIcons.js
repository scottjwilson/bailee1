import React, { Component } from 'react'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import styled from 'styled-components'
import { mainstyles } from '../../utils'
export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: `https://instagram.com/thebaileeapp`,
      },
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: `https://facebook.com/thebaileeapp`,
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: `https://twitter.com/thebaileeapp`,
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => (
          <a
            href={item.path}
            key={item.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    // margin-right: 2rem;
    font-size: 1.3rem;
    color: #fff;

    cursor: pointer;
    ${mainstyles.transFunction()};
  }

  .icon:hover {
    color: ${mainstyles.colors.mainRed};
  }
  display: none;
  @media (min-width: 768px) {
    width: 10rem;
    display: flex;
    justify-content: space-around;
  }
`
