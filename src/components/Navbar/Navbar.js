import React, { Component } from 'react'
import styles from '.navbar.module.css'
import Image from './Image'

export default class Navbar extends Component {
  state = {
    toggle: true,
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    })
  }

  render() {
    return (
      <nav>
        <button
          type="button"
          className={styles.toggleBtn}
          onClick={this.toggle}
        >
          menu
          <Image />
        </button>
      </nav>
    )
  }
}
