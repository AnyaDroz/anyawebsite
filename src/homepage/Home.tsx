import styles from "./Home.module.css";
import clsx from "clsx";
import Grid from "../common/Grid";
import ProjectCard from "./ProjectCard";
import AboutLinks from "./AboutLinks";

const Home = () => {
  return (
    <div>
      <Grid className={styles.header}>
        {/*<AboutLinks />*/}
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
          image="/images/analogue-cover.png"
          mobileImage="/images/multi-cover-mobile.png"
          altText=""
          link="/multi-transactions"
          name="Stopwatch"
          type="Case study"
          tech="React"
          dates="Sep 23 - Jun 24"
          company="Personal"
        />
        <ProjectCard
          image="/images/echo-cover.png"
          mobileImage="/images/multi-cover-mobile.png"
          altText=""
          link="/multi-transactions"
          name="Echo studio"
          type="Case study"
          tech="React"
          dates="Sep 23 - Jun 24"
          company="Personal"
        />
        <ProjectCard
          image="/images/loupe-cover.png"
          mobileImage="/images/multi-cover-mobile.png"
          altText=""
          link="/multi-transactions"
          name="Loupe"
          type="Case study"
          tech="React"
          dates="Sep 23 - Jun 24"
          company="Personal"
        />
        <ProjectCard
          image="/images/multi-cover.png"
          mobileImage="/images/multi-cover-mobile.png"
          altText=""
          link="/multi-transactions"
          name="Echo studio"
          type="Case study"
          tech="React"
          dates="Sep 23 - Jun 24"
          company="Personal"
        />
        <ProjectCard
          image="/images/access-cover.png"
          mobileImage="/images/multi-cover-mobile.png"
          altText=""
          link="/multi-transactions"
          name="Echo studio"
          type="Case study"
          tech="React"
          dates="Sep 23 - Jun 24"
          company="Personal"
        />
        <ProjectCard
          image="/images/analogue-cover.png"
          mobileImage="/images/multi-cover-mobile.png"
          altText=""
          link="/multi-transactions"
          name="Echo studio"
          type="Case study"
          tech="React"
          dates="Sep 23 - Jun 24"
          company="Personal"
        />
      </div>
    </div>
  );
};

export default Home;
