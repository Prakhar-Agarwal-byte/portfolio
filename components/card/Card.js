import React from "react";
import styles from "./Card.module.css";
import { BiLinkExternal } from "react-icons/bi";

const Card = ({ img, heading, desc, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div class={`${styles.animatedbox} ${styles.in}`}>
        <img src={img} alt="image" />
        <h1>{heading}</h1>
        <p>{desc}</p>
        <BiLinkExternal className={styles.link} />
      </div>
    </a>
  );
};

export default Card;
