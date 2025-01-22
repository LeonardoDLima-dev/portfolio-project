import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Sou Leonardo Lima</h1>
        <p className={styles.description}>
          Sou Desenvolvedor Full-Stack com 2 anos de experiências usando React e
          NodeJS. Entre em contato comigo para saber mais!
        </p>
        <a href="mailto:leonardo.lima900@hotmail.com" className={styles.contactBtn}>
          Meu Contato
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
