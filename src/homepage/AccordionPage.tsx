import * as React from "react";
import styles from "./AccordionPage.module.css";
import About from "./About";
import { useEffect, useState } from "react";
import { Accordion } from "./Accordion";
import Work from "./Work";
import Contact from "./Contact";

type Props = {
  index: number;
};

export const AccordionPage = ({ index = 0 }: Props) => {
  const [expanded, setExpanded] = useState<number>(index);

  return (
    <div className={styles.example}>
      <Accordion
        className={styles.about}
        id={0}
        label="About"
        expanded={expanded}
        setExpanded={setExpanded}
        accordionPath="/about"
      >
        <About />
      </Accordion>
      <Accordion
        className={styles.work}
        id={1}
        label="Work"
        expanded={expanded}
        setExpanded={setExpanded}
        accordionPath="/work"
      >
        <Work />
      </Accordion>

      <Accordion
        className={styles.contact}
        id={2}
        label="Contact"
        expanded={expanded}
        setExpanded={setExpanded}
        accordionPath="/contact"
      >
        <Contact />
      </Accordion>
    </div>
  );
};
