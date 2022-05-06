import React from "react";
import styles from "./Card.module.css";
import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";

const Card = ({ img, heading, desc, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className={`${styles.animatedbox} ${styles.in}`}>
        <Image src={img} alt="image" height={100} width={100} />
        <h1>{heading}</h1>
        <p>{desc}</p>
        <BiLinkExternal className={styles.link} />
      </div>
    </a>
  );
};

export default Card;
