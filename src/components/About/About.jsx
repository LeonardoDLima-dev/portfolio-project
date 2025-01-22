import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre Mim</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Front-End</h3>
              <p>
                Sou desenvolvedor Front-End com experiência em construção de sites responsivos e otimizados.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Back-End</h3>
              <p>
                Tenho experiência no desenvolvimento de sistemas Back-End rápidos e opimizados com APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Designer UI</h3>
              <p>
                Eu projetei vários landing pages e criei sistemas de designer
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
