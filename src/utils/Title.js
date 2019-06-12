import React from 'react'
import titlestyle from './title.module.css'

export function Title({ title, message }) {
  return (
    <div className={titlestyle.titlewrapper}>
      <h1 className={titlestyle.title}>{title}</h1>
      {/* <div className="underline" /> */}
    </div>
  )
}

Title.defaultProps = {
  title: 'default title',
}
