import styles from "./About.module.css";
import Paragraph from "../case-study/text-layouts/Paragraph";
import AboutLinks from "./AboutLinks";
import Grid from "../common/Grid";
import clsx from "clsx";

export default function About() {
  return (
    <div className={styles.aboutSection}>
      <Grid className={clsx(styles.container)}>
        <div className={styles.about}>
          <p>
            Hello - I’m Anya, an experienced product designer and creative
            front-end developer who designs with code in mind. I enjoy solving
            problems with clean scalable solutions and creating elegant digital
            products and brand experiences. I am a highly visual thinker working
            with React, Angular, Storybook, Framer... to name a few. This blend
            of user experience and development helps me create business value
            both at the macro level of winning a users’ attention, to the micro
            level of components and consistent, flexible design systems.
          </p>
          <p>Website built with React & Framer.</p>
        </div>
      </Grid>
      <AboutLinks />
    </div>
  );
}
