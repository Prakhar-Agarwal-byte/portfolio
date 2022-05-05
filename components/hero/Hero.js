import Image from "next/image";
import React, { useEffect } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  useEffect(() => {
    const position = document.documentElement;
    const isMobile = navigator.userAgentData.mobile;
    if (isMobile) {
      let i = 0;
      setInterval(() => {
        position.style.setProperty("--x", i + "px");
        i++;
      }, 100);
    } else {
      position.addEventListener("mousemove", (e) => {
        position.style.setProperty("--x", e.clientX + "px");
      });
    }
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
            <span>Python</span>
            <span>C++</span>
            <span>Android</span>
            <span>Fullstack</span>
            <span>Node</span>
            <span>React</span>
            <span>Javascript</span>
            <span>Kotlin</span>
            <span>Java</span>
            <span>Typescript</span>
          </h2>
          <h2 style={{ "--i": 2.5 }}>
            <span>Javascript</span>
            <span>Kotlin</span>
            <span>C++</span>
            <span>Android</span>
            <span>Fullstack</span>
            <span>Java</span>
            <span>Typescript</span>
            <span>Python</span>
            <span>Node</span>
            <span>React</span>
          </h2>
          <h2 style={{ "--i": 2.25 }}>
            <span>Fullstack</span>
            <span>Node</span>
            <span>React</span>
            <span>Javascript</span>
            <span>Python</span>
            <span>C++</span>
            <span>Android</span>
            <span>Kotlin</span>
            <span>Java</span>
            <span>Typescript</span>
          </h2>
          <h2 style={{ "--i": 1.25 }}>
            <span>Android</span>
            <span>Fullstack</span>
            <span>Node</span>
            <span>Typescript</span>
            <span>Python</span>
            <span>C++</span>
            <span>Javascript</span>
            <span>Kotlin</span>
            <span>Java</span>
            <span>React</span>
          </h2>
          <h2 style={{ "--i": 0.75 }}>
            <span>Android</span>
            <span>Typescript</span>
            <span>Javascript</span>
            <span>Kotlin</span>
            <span>Java</span>
            <span>Python</span>
            <span>React</span>
            <span>C++</span>
            <span>Fullstack</span>
            <span>Node</span>
          </h2>
          <h2 style={{ "--i": 0.3 }}>
            <span>Java</span>
            <span>Javascript</span>
            <span>C++</span>
            <span>Kotlin</span>
            <span>Typescript</span>
            <span>Fullstack</span>
            <span>React</span>
            <span>Python</span>
            <span>Android</span>
            <span>Node</span>
          </h2>
          <h2 style={{ "--i": 0.25 }}>
            <span>Typescript</span>
            <span>Python</span>
            <span>Javascript</span>
            <span>Fullstack</span>
            <span>Node</span>
            <span>React</span>
            <span>C++</span>
            <span>Android</span>
            <span>Kotlin</span>
            <span>Java</span>
          </h2>
          <h2 style={{ "--i": 2.35 }}>
            <span>Javascript</span>
            <span>Java</span>
            <span>React</span>
            <span>Typescript</span>
            <span>Fullstack</span>
            <span>Node</span>
            <span>Kotlin</span>
            <span>Python</span>
            <span>C++</span>
            <span>Android</span>
          </h2>
        </div>
      </section>
    </main>
  );
};

export default Hero;
