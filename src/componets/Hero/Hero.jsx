import React, {useState} from "react";
import styles from "../Hero/hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.container}>
            <h1 className={styles.title}>Hi, i'm Leonardo</h1>
            <p className={styles.description}>I'm a Full-Stack Developer with 2 years of experience using React and 
                NodeJs. Reach out if you'd like to learn more! 
            </p>
            <a href="mailto:leonardo.lima900@hotmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>;
}
