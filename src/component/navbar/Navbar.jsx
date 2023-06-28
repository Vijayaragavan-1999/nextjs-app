import Link from "next/link";
import React from "react";
import { links } from "../../../public/assests/navbar";
import styles from "./styles.module.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className={styles.header}>
        <Link className={`styles.decoration`} href="/">
          <h1 className={styles.title}>Vijayaragavan</h1>
        </Link>
        <div className={styles.navlinks}>
          {links.map((link) => (
            <Link className={styles.decoration} key={link.id} href={link.link}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
