import styles from "./About.module.css";
import AboutLinks from "./AboutLinks";
import Grid from "../common/Grid";
import clsx from "clsx";

export default function About() {
  return (
    <div className={styles.aboutSection}>
      <Grid className={clsx(styles.container)}>
        <div className={styles.about}>
          <p>
            Hello - I’m Anya, an experienced software engineer and UI/UX
            designer. I enjoy solving problems with clean scalable solutions and
            creating elegant digital products and brand experiences. I am a
            highly visual thinker working with Typescript, React, Angular,
            Storybook, Framer... to name a few.
          </p>
          <p>Website built with React.</p>
        </div>
      </Grid>
      <AboutLinks />
    </div>
  );
}
