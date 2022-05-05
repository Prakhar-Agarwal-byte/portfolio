import Image from "next/image";
import React, { useEffect } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  useEffect(() => {
    const position = document.documentElement;
    position.addEventListener("mousemove", (e) => {
      position.style.setProperty("--x", e.clientX + "px");
    });
  }, []);

  return (
    <main>
      <section className={styles.section}>
        <div className={styles.text}>
          <h2 style={{ "--i": 0.5 }}>
            <span>Javascript</span>
            <span>Kotlin</span>
            <span>Java</span>
            <span>Typescript</span>
            <span>Python</span>
            <span>C++</span>
            <span>Android</span>
            <span>Fullstack</span>
            <span>Node</span>
            <span>React</span>
          </h2>
          <h2 style={{ "--i": 1.5 }}>
            <span>Javascript</span>
            <span>Kotlin</span>
            <span>Java</span>
            <span>Typescript</span>
            <span>Python</span>
            <span>C++</span>
            <span>Android</span>
            <span>Fullstack</span>
            <span>Node</span>
            <span>React</span>
          </h2>
          <h2 style={{ "--i": 2.5 }}>
            <span>Javascript</span>
            <span>Kotlin</span>
            <span>Java</span>
            <span>Typescript</span>
            <span>Python</span>
            <span>C++</span>
            <span>Android</span>
            <span>Fullstack</span>
            <span>Node</span>
            <span>React</span>
          </h2>
          <h2 style={{ "--i": 2.25 }}>
            <span>Javascript</span>
            <span>Kotlin</span>
            <span>Java</span>
            <span>Typescript</span>
            <span>Python</span>
            <span>C++</span>
            <span>Android</span>
            <span>Fullstack</span>
            <span>Node</span>
            <span>React</span>
          </h2>
          <h2 style={{ "--i": 1.25 }}>
            <span>Javascript</span>
            <span>Kotlin</span>
            <span>Java</span>
            <span>Typescript</span>
            <span>Python</span>
            <span>C++</span>
            <span>Android</span>
            <span>Fullstack</span>
            <span>Node</span>
            <span>React</span>
          </h2>
          <h2 style={{ "--i": 0.75 }}>
            <span>Javascript</span>
            <span>Kotlin</span>
            <span>Java</span>
            <span>Typescript</span>
            <span>Python</span>
            <span>C++</span>
            <span>Android</span>
            <span>Fullstack</span>
            <span>Node</span>
            <span>React</span>
          </h2>
          <h2 style={{ "--i": 0.3 }}>
            <span>Javascript</span>
            <span>Kotlin</span>
            <span>Java</span>
            <span>Typescript</span>
            <span>Python</span>
            <span>C++</span>
            <span>Android</span>
            <span>Fullstack</span>
            <span>Node</span>
            <span>React</span>
          </h2>
          <h2 style={{ "--i": 0.25 }}>
            <span>Javascript</span>
            <span>Kotlin</span>
            <span>Java</span>
            <span>Typescript</span>
            <span>Python</span>
            <span>C++</span>
            <span>Android</span>
            <span>Fullstack</span>
            <span>Node</span>
            <span>React</span>
          </h2>
          <h2 style={{ "--i": 2.35 }}>
            <span>Javascript</span>
            <span>Kotlin</span>
            <span>Java</span>
            <span>Typescript</span>
            <span>Python</span>
            <span>C++</span>
            <span>Android</span>
            <span>Fullstack</span>
            <span>Node</span>
            <span>React</span>
          </h2>
        </div>
      </section>
    </main>
  );
};

export default Hero;
