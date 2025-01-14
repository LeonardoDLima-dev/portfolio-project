import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title} >About</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Front-End Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive and optimized sites
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Back-End Developer</h3>
                            <p>I have experience developing fast and optimised back-end and systems and APIs
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="Server Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>I have designer multiple landing pages and have created designer systems as well
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )

}