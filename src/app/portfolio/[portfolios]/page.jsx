import React from 'react'
import styles from "./styles.module.css"
import Button from "../../../component/button/Button"
import Image from 'next/image'
import Illustrate from "../../../../public/illustration.png";
import Websites from "../../../../public/websites.jpg";
import Apps from "../../../../public/apps.jpg";

const page = ({params}) => {
  console.log(params)
  return (
    <div className={styles.portfolios}>
      <h1 className={styles.Header}>{params.portfolios}</h1>
      <div className={styles.content}>
        <div className={styles.left}> 
          <h className={styles.title}>Creative Portfolio</h>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            </p>
            <Button text="See More" url="/portfolio"/>
        </div>
        <Image  className={styles.right} src={Illustrate} width={300} height={300} alt="sdfasdf"/>
      </div>
      <div className={styles.content}>
        <Image  className={styles.right} src={Websites} width={300} height={300} alt="sdfasdf"/>
        <div className={styles.left}> 
          <h className={styles.title}>Creative Portfolio</h>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            </p>
            <Button text="See More" url="/portfolio"/>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.left}> 
          <h className={styles.title}>Minimal Single Products</h>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            </p>
            <Button text="See More" url="/portfolio"/>
        </div>
        <Image  className={styles.right} src={Apps} width={300} height={300} alt="sdfasdf"/>
      </div>
    </div>
  )
}

export default page