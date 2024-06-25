import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => {
  
  return (
    <section className={styles.container}>
      
      {/* Background Video */}
      
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vuk</h1>
        <h1 className={styles.description}>
          Front-end developer <br /> <br></br>
          <h6> Passionate about exploring new technologies, contributing to open source, and prioritizing performance and accessibility.  </h6> 
               </h1>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
