import React, { Component } from 'react'
import styled from 'styled-components'
import img from 'gatsby-image'
import { mainstyles } from '../utils'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import links from '../constants/links'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../components/footer.module.css'

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: 'https://instagram.com/thebaileeapp',
      },
      {
        id: 2,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: 'https://facebook.com/thebaileeapp',
      },
      {
        id: 3,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: 'https://twitter.com/thebaileeapp',
      },
    ],
  }

  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.links}>
          {links.map((item, index) => {
            return (
              <AniLink fade key={index} to={item.path} className={styles.link}>
                {item.text}
              </AniLink>
            )
          })}
        </div>
        <div className={styles.icons}>
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className={styles.copyright}>Copyright 2019 Bailee</p>
      </footer>
    )
  }
}
