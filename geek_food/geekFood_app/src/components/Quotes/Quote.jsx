import React from 'react'
import styles from "./Quote.module.css"

export const Quote = (props) => {
  return (
    <div className={styles['quote']}>
        <h3>{props.line}</h3>
        <p>{props.author}</p>
    </div>
  )
}
