import React from "react";
import prakhar_img from "../../public/prakhar_img.jpg";
import Typewriter from "typewriter-effect";
import "@fontsource/dancing-script";
import Image from "next/image";
import styles from "./HeroTop.module.css";

const HeroTop = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          className={styles.image}
          src={prakhar_img}
          alt="prakhar image"
          height={256}
          width={256}
        />
      </div>

      <h1 className={styles.name}>Hi 👋, I am Prakhar Agarwal</h1>

      <h1>
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Fullstack Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Android Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("ML Enthusiast")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Competitive Programmer")
              .pauseFor(1000)
              .start();
          }}
        />
      </h1>
    </div>
  );
};

export default HeroTop;
