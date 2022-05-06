import React from "react";
import Card from "../card/Card";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <div className={styles.line}></div>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.cards}>
        <Card
          img={"/brain.jpg"}
          heading="Tumour Segmentation"
          desc="Segmenting the tumour from brain MRI images using UNET architecture"
          link="https://github.com/Prakhar-Agarwal-byte/MRI-Tumour-Segmentation"
        />
        <Card
          img={"/iit.png"}
          heading="Inter IIT Tech Meet 10.0"
          desc="ISRO's web based automatic identification of solar bursts in x-ray light curves"
          link="https://github.com/Prakhar-Agarwal-byte/Inter-IIT-ISRO"
        />
        <Card
          img={"/music.jpg"}
          heading="Musicify"
          desc="A community platform for sharing music with each other"
          link="https://prakhar-musicify.netlify.app/"
        />
        <Card
          img={"/remind.png"}
          heading="Remind Me There"
          desc="Remind Me There is an Android app to create reminders based on geofences"
          link="https://github.com/Prakhar-Agarwal-byte/RemindMeThere"
        />
        <Card
          img={"/dukaan.jpg"}
          heading="Apni Dukaan"
          desc="Ecommerce website which enables people buy their favourite products"
          link="https://apni-dukaan.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
