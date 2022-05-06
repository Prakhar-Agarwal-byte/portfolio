import React from "react";
import Card from "../card/Card";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <div className={styles.line}></div>
      <h1 className={styles.heading}>Experience</h1>
      <div className={styles.cards}>
        <Card
          img={"/gsoc.jpg"}
          heading="GSOC"
          desc="Google Summer of Code is a global, online program focused on bringing new contributors into open source software development."
          link="https://github.com/Prakhar-Agarwal-byte/purr-data"
        />
        <Card
          img={"/bolkar.jpg"}
          heading="Bolkar"
          desc="Bolkar-app aims to create a fully-fledged Audio Content Platform where the regional language users can use this platform without any barrier of language and typing."
          link="https://www.linkedin.com/company/bolkarapp/?originalSubdomain=in"
        />
        <Card
          img={"/entwik.jpg"}
          heading="Entwik"
          desc="We develop Indian centric casual games for mass India. "
          link="https://www.linkedin.com/company/entwik/about/"
        />
        <Card
          img={"/cops.jpg"}
          heading="COPS"
          desc="Club of Programmers, Indian Institute of Technology (BHU) Varanasi"
          link="https://copsiitbhu.co.in/"
        />
        <Card
          img={"/amahi.jpg"}
          heading="Amahi"
          desc="Amahi is a seed-stage startup developing next generation NAS/Router software with the largest App Store for webapps and media apps. "
          link="https://www.amahi.org/"
        />
        <Card
          img={"/appwrite.jpg"}
          heading="Appwrite"
          desc="We abstract and simplify common development tasks to help you grow your business in a fast and secure way."
          link="https://appwrite.io/"
        />
        <Card
          img={"/layer5.jpg"}
          heading="Layer 5"
          desc="Layer5 helps organizations expect more from their infrastructure. We are enablers of the engineer and embrace developer-defined infrastructure. "
          link="https://layer5.io/"
        />
      </div>
    </section>
  );
};

export default Experience;
