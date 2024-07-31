import styles from "./Home.module.css";
import clsx from "clsx";
import Grid from "../common/Grid";
import ProjectCard from "./ProjectCard";
import AboutLinks from "./AboutLinks";

const Home = () => {
  return (
    <div>
      <Grid className={styles.header}>
        <AboutLinks />
        <p className={styles.about}>
          <b>Hello - I’m Anya</b>, an experienced software engineer and UI/UX
          designer. I enjoy solving problems with clean scalable solutions and
          creating elegant digital products and brand experiences. I am a highly
          visual thinker working with Typescript, React, Angular, Storybook,
          Framer... to name a few.
        </p>
      </Grid>
      <div className={clsx(styles.projectContainer)}>
        <ProjectCard
          image="/images/echo-cover.png"
          mobileImage="/images/multi-cover-mobile.png"
          altText=""
          link="/echo"
          name="Echo studio"
          type="Case study"
          tech="Front-end development, UI/UX Design"
          dates="Sep 23 - Jun 24"
          company="Pollinate"
          hoverColor="#D2D4D6"
        />
        <ProjectCard
          image="/images/framer-cover.png"
          mobileImage="/images/multi-cover-mobile.png"
          altText=""
          link="/multi-transactions"
          name="Framer motion"
          type="Publication"
          tech="Front-end development"
          dates="Sep 23 - Jun 24"
          company="Medium"
          hoverColor="#FBD4D6"
        />
        <ProjectCard
          image="/images/loupe-cover.png"
          mobileImage="/images/multi-cover-mobile.png"
          altText=""
          link="/multi-transactions"
          name="Loupe"
          type="Case study"
          tech="Front-end development, UI/UX Design"
          dates="Sep 23 - Jun 24"
          company="Loupe"
          hoverColor="#FCF2D4"
        />
        <ProjectCard
          image="/images/multi-cover.png"
          mobileImage="/images/multi-cover-mobile.png"
          altText=""
          link="/multi-transactions"
          name="Multi-transactions"
          type="Case study"
          tech="UI/UX Design"
          dates="Sep 23 - Jun 24"
          company="Personal"
          hoverColor="#CFD9E5"
        />
        <ProjectCard
          image="/images/access-cover.png"
          mobileImage="/images/multi-cover-mobile.png"
          altText=""
          link="/multi-transactions"
          name="Instant access"
          type="Case study"
          tech="UI/UX Design"
          dates="Sep 23 - Jun 24"
          company="iwocaPay"
          hoverColor="#D6E7DE"
        />
        <ProjectCard
          image="/images/syncing-cover.png"
          mobileImage="/images/multi-cover-mobile.png"
          altText=""
          link="/multi-transactions"
          name="Syncing Design & Development"
          type="Publication"
          tech="Front-end development"
          dates="Sep 23 - Jun 24"
          company="Medium"
          hoverColor="#E3E4EC"
        />
        <ProjectCard
          image="/images/analogue-cover.png"
          mobileImage="/images/multi-cover-mobile.png"
          altText=""
          link="/multi-transactions"
          name="Analogue"
          type="Case study"
          tech="Front-end development, UI/UX Design"
          dates="Sep 23 - Jun 24"
          company="Multiple companies"
          hoverColor="#D5DAF6"
        />
      </div>
      <Grid className={styles.footer}>
        <p>©2024</p>
      </Grid>
    </div>
  );
};

export default Home;
