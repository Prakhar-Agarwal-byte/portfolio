import React from "react";
import styles from "./AboutTop.module.css";
import hello_img from "../../public/hello.gif";
import Image from "next/image";
import {
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const AboutTop = () => {
  return (
    <section id="about" className={styles.container}>
      <h1 className={styles.heading}>About Me</h1>
      <div className={styles.sec}>
        <div className={styles.image}>
          <Image src={hello_img} alt="hello image" height={350} width={350} />
        </div>

        <div className={styles.desc}>
          I'm Prakhar Agarwal, a 2nd year Mechanical Engineering undergraduate
          at IIT (BHU) Varanasi. I am passionate about technology and
          programming. I love exploring new tech and have worked with various
          technologies. I have a keen interest in building applications,
          Computer Vision and Problem Solving. I 💗 contributing to Open Source
          and building something that can help people. Feel free to reach me on
          my social media handles. Thanks for visiting my website 😁
        </div>
      </div>
      <div className={styles.icons}>
        <AiFillMail
          onClick={() => {
            window.open("mailto:prakharagarwal3031@gmail.com", "_blank");
          }}
          className={styles.icon}
        />
        <AiFillLinkedin
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/prakhar-agarwal-byte",
              "_blank"
            );
          }}
          className={styles.icon}
        />
        <AiFillGithub
          onClick={() => {
            window.open("https://github.com/Prakhar-Agarwal-byte", "_blank");
          }}
          className={styles.icon}
        />
        <SiLeetcode
          onClick={() => {
            window.open("https://leetcode.com/Prakhar_Agarwal_Byte/", "_blank");
          }}
          className={styles.icon}
        />
        <AiFillInstagram
          onClick={() => {
            window.open("https://www.instagram.com/prakharagarwal1/", "_blank");
          }}
          className={styles.icon}
        />
      </div>
    </section>
  );
};

export default AboutTop;
