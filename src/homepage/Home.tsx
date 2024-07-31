import styles from "./Home.module.css";
import clsx from "clsx";
import Grid from "../common/Grid";
import Paragraph from "../case-study/text-layouts/Paragraph";
import ProjectCard from "./ProjectCard";
import AboutLinks from "./AboutLinks";

const Home = () => {
  return (
    <div>
      <Grid>
        <p className={styles.about}>
          Hello - I’m Anya, an experienced software engineer and UI/UX designer.
          I enjoy solving problems with clean scalable solutions and creating
          elegant digital products and brand experiences. I am a highly visual
          thinker working with Typescript, React, Angular, Storybook, Framer...
          to name a few.
        </p>
        <AboutLinks />
      </Grid>
      <div className={clsx(styles.projectContainer)}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Home;
