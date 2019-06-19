import React from 'react'
import styles from './member.module.css'
import Img from 'gatsby-image'

const Member = ({ member }) => {
  const { name, title, about } = member
  const { fluid } = member.photo
  return (
    <article className={styles.card}>
      <div className={styles.imagecontainer} />
      <Img className={styles.img} fluid={fluid} />
      <div className={styles.footer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{about}</div>
        <div className={styles.info}>
          <div className={styles.details}>
            <h6>{title}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Member
