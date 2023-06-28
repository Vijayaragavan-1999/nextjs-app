//main home page
import React from 'react'
import styles from "./styles.module.css"
import Hero from "../../public/hero.png"
import Image from 'next/image'
import Button from '../component/button/Button'
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeLeft}>
      <h1>Better design for your digital products</h1>
      <p>Turning your Idea into Reality. We bring together the teams from the global tech industry</p>
      <Button url="/portfolio" text="See Our Work"/>
      </div>
      <Image className={styles.homeimage} src="/hero.png" height={320} width={320} alt="image"></Image>
      </div>
  )
}

export default Home