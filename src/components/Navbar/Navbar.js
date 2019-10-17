import React from 'react'
import styles from './navbar.module.css'
import Image from './Image'
import { AppContext } from '../../context'

const Navbar = () => {
  const { handleOpenSidebar } = React.useContext(AppContext)
  return (
    <nav>
      <button
        type="button"
        className={styles.toggleBtn}
        onClick={handleOpenSidebar}
      >
        menu
        <Image />
      </button>
    </nav>
  )
}

export default Navbar
