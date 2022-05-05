import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.line}></div>
        <div className={styles.t1}>
          🧑‍💻 with 🍕 and 💖 by{""}
          <a
            className={styles.a}
            href="https://github.com/Prakhar-Agarwal-byte"
          >
            {" "}
            Prakhar Agarwal
          </a>
        </div>
        <div className={styles.t2}>Copyright © 2022 | Prakhar Agarwal</div>
      </div>
    </footer>
  );
};

export default Footer;
