import React from "react";
import styles from "./styles.module.css";
import Illustration from "../../../public/illustration.png";
import Websites from "../../../public/websites.jpg";
import Apps from "../../../public/apps.jpg";
import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    img: Illustration,
    title: "Illustration",
    url:"portfolio/illustration"
  },
  {
    id: 2,
    img: Websites,
    title: "Websites",
    url:"portfolio/websites"
  },
  {
    id: 3,
    img: Apps,
    title: "Apps",
    url:"portfolio/apps"
  },
];

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h2>Choose a gallery </h2>
      <div className={styles.container}>
        {portfolioItems.map((item) => {
          return (
            <Link href={"asd"}>
            <div className={styles.port}>
              <Image
                className={styles.portimage}
                src={item.img}
                width={250}
                height={330}
                alt="gallery"
              />
              <div className={styles.portname}>{item.title}</div>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
