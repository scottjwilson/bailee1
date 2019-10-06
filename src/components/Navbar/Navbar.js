import React from 'react'
import styles from './navbar.module.css'

import { FaAlignRight } from 'react-icons/fa'
import { AppContext } from '../../context'
const Navbar = () => {
  const { handleOpenSidebar, height } = React.useContext(AppContext)
  return (
    <nav>
      <button
        type="button"
        className={styles.toggleBtn}
        onClick={handleOpenSidebar}
      >
        menu<FaAlignRight className={styles.toggleIcon}></FaAlignRight>
      </button>
    </nav>
  )
}

export default Navbar
