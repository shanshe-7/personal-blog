import styles from "./styles/Navbar.module.css";

import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>Shanshe Kenkadze</h2>
      <ul role="list" className={styles.links}>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
