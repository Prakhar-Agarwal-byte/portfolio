import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.brand}>Prakhar Agarwal</div>
      <div
        className={
          isNavExpanded ? `${styles.menu} ${styles.expanded}` : styles.menu
        }
      >
        <ul>
          <a href="#">
            <li>About Me</li>
          </a>
          <a href="#">
            <li>Projects</li>
          </a>
          <a href="#">
            <li>Skill Set</li>
          </a>
          <a href="#">
            <li>Open Source</li>
          </a>
        </ul>
      </div>
      <a
        href="#"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          console.log("isNavExpanded", isNavExpanded);
        }}
      >
        <GiHamburgerMenu className={styles.hamburger} />
      </a>
    </nav>
  );
};

export default Navbar;
