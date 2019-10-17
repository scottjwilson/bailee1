import React from 'react'
import { AppContext } from '../../context/'
import styles from './sidebar.module.css'
import { FaTimes } from 'react-icons/fa'
import routes from '../../constants/routes'
import { Link } from 'gatsby'

const Sidebar = () => {
  const { isSidebarOpen, handleCloseSidebar } = React.useContext(AppContext)
  return (
    <div
      className={
        isSidebarOpen
          ? `${styles.sidebar}`
          : `${styles.sidebar} ${styles.closeSidebar} `
      }
    >
      <header className={styles.header}>
        <button onClick={handleCloseSidebar} className={styles.closeBtn}>
          close <FaTimes className={styles.closeIcon}></FaTimes>
        </button>
      </header>
      <section className={styles.linksContainer}>
        <div className={styles.links}>
          {routes.map(item => {
            return (
              <Link
                key={item.id}
                to={item.url}
                className={styles.link}
                onClick={handleCloseSidebar}
              >
                {item.text}
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Sidebar
