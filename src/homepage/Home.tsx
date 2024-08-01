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
          <b>Hello - I’m Anya</b>, a Software Engineer and UI/UX Designer. I
          enjoy solving problems with clean scalable solutions and creating
          elegant digital products and brand experiences. I am a highly visual
          thinker working with Typescript, React, Angular, Storybook, Framer...
          to name a few.
        </p>
      </Grid>
      <div className={clsx(styles.projectContainer)}>
        <ProjectCard
          image="/images/stopwatch-cover.png"
          altText="stopwatch"
          link="https://martian-stopwatch-6anj60o93-anyadrozs-projects.vercel.app/"
          name="Stopwatch"
          type="Coding Project"
          tech="React, Typescript"
          dates="Jul 24"
          company="Personal"
          hoverColor="#D0D7F1"
          isExternal={true}
        />
        <ProjectCard
          image="/images/echo-cover.png"
          altText="echo-studio "
          link="/echo"
          name="Echo studio"
          type="Case study"
          tech="Front-end development, UI/UX Design"
          dates="Sep 23 - Jun 24"
          company="Pollinate"
          hoverColor="#D2D4D6"
          isExternal={false}
        />
        <ProjectCard
          image="/images/framer-cover.png"
          altText=""
          link="https://medium.com/@anya./react-framer-sequences-397db9375fb4"
          name="Framer motion"
          type="Publication"
          tech="Front-end development"
          dates="May 24"
          company="Medium"
          hoverColor="#FBD4D6"
          isExternal={true}
        />
        <ProjectCard
          image="/images/loupe-cover.png"
          altText=""
          link="/multi-transactions"
          name="Loupe"
          type="Case study"
          tech="Front-end development, UI/UX Design"
          dates="Sep 22 - Jun 23"
          company="Loupe"
          hoverColor="#FCF2D4"
          isExternal={false}
        />
        <ProjectCard
          image="/images/syncing-cover.png"
          altText=""
          link="https://medium.com/@anya./syncing-software-design-development-how-to-push-code-changes-from-figma-21babf7e6ac3"
          name="Syncing Design & Development"
          type="Publication"
          tech="Front-end development"
          dates="May 23"
          company="Medium"
          hoverColor="#E3E4EC"
          isExternal={true}
        />
        <ProjectCard
          image="/images/multi-cover.png"
          altText=""
          link="/multi-transactions"
          name="Multi-transactions"
          type="Case study"
          tech="UI/UX Design"
          dates="Jan 22"
          company="Personal"
          hoverColor="#CFD9E5"
          isExternal={false}
        />
        <ProjectCard
          image="/images/access-cover.png"
          altText=""
          link="/access"
          name="Instant access"
          type="Case study"
          tech="UI/UX Design"
          dates="Jun 21 - Sep 21"
          company="iwocaPay"
          hoverColor="#D6E7DE"
          isExternal={false}
        />

        <ProjectCard
          image="/images/analogue-cover.png"
          altText=""
          link="/analogue"
          name="Analogue"
          type="Case study"
          tech="Front-end development, UI/UX Design"
          dates="Sep 23 - Jun 24"
          company="Pollinate, iwocaPay"
          hoverColor="#D5DAF6"
          isExternal={false}
        />
      </div>
      <Grid className={styles.footer}>
        <p className={styles.copyright}>©2024</p>
      </Grid>
    </div>
  );
};

export default Home;
