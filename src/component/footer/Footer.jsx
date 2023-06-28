
import React from 'react'
import styles from "./styles.module.css"
import Image from 'next/image'

const Footer = () => {
  
  console.log("hello")
  return (
    <div className={styles.footer}>
      <p>Vijayaragavan@2023</p>
      <div className={styles.socilIcons}>
      <Image className={styles.icon} src="/1.png" width={15} height={15} alt = "socialMedia"/>
      <Image className={styles.icon} src="/2.png" width={15} height={15} alt = "socialMedia"/>
      <Image className={styles.icon} src="/3.png" width={15} height={15} alt = "socialMedia"/>
      <Image className={styles.icon} src="/4.png" width={15} height={15} alt = "socialMedia"/>
      </div>
      </div>
  )
}

export default Footer