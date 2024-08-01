import styles from "./AboutLinks.module.css";
import Grid from "../common/Grid";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import AboutLink from "./AboutLink";

export default function AboutLinks() {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <AboutLink link="https://medium.com/@anya." name="Medium" />
        <AboutLink link="https://github.com/AnyaDroz" name="Github" />
        <AboutLink
          link="https://www.linkedin.com/in/anya-drozdova"
          name="LinkedIn"
        />
        <AboutLink
          link="mailto:anyadrozdova.dev@gmail.com"
          name="anyadrozdova.dev@gmail.com"
        />
      </div>
    </div>
  );
}
