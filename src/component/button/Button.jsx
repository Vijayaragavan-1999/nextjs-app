import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.css"
const Button = ({url,text}) => {
  return (
    <Link href={url}>
        <button className={styles.button}> {text}</button>
    </Link>
  )
}

export default Button