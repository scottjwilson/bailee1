import React from 'react'
import styled from 'styled-components'
import { mainstyles, Title, SectionButton } from '../../utils'
import styles from './contactform.module.css'

export default function Form() {
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <form
          className={styles.form}
          action="https://formspree.io/support@thebaileeapp.com"
          method="POST"
        >
          <Title title="Contact Us" />
          <div classNamer={styles.group}>
            <input
              type="text"
              className={styles.input}
              placeholder="Name"
              namre="name"
            />
            <input
              type="email"
              className={styles.input}
              placeholder="Email"
              name="_replyto"
            />
            <textarea
              rows="6"
              className={styles.input}
              placeholder="Your Message"
            />
            <div className={styles.btnwrapper}>
              <button className={styles.submit} type="submit">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
