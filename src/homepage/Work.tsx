import styles from "./Work.module.css";
import GridThree from "../case-study/image-layouts/GridThree";
import * as React from "react";
import Project from "./Project";

export default function Work() {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.workContent}>
        <Project
          link="/echo"
          header="Echo studio"
          role="Lead designer and Angular developer"
          image="/images/echo-10.png"
          mobileImage="/images/echo-10.png"
          tags=" Fintech, B2B2B, Editing software"
          altText="echo"
        />
        <Project
          link="/echo"
          header="Loupe"
          role="Lead designer and React developer"
          image="/images/echo-10.png"
          mobileImage="/images/echo-10.png"
          tags="B2C, Marketplace, E-commerce, Publication"
          altText="echo"
        />
        <Project
          link="/echo"
          header="Multi-transactions"
          role="Lead designer and React developer"
          image="/images/echo-10.png"
          mobileImage="/images/echo-10.png"
          tags="b2c"
          altText="echo"
        />
        <Project
          link="/echo"
          header="Echo studio"
          role="Lead designer and React developer"
          image="/images/echo-10.png"
          mobileImage="/images/echo-10.png"
          tags="b2c"
          altText="echo"
        />
        <Project
          link="/echo"
          header="Echo studio"
          role="Lead designer and React developer"
          image="/images/echo-10.png"
          mobileImage="/images/echo-10.png"
          tags="b2c"
          altText="echo"
        />
        <Project
          link="/echo"
          header="Echo studio"
          role="Lead designer and React developer"
          image="/images/echo-10.png"
          mobileImage="/images/echo-10.png"
          tags="b2c"
          altText="echo"
        />
      </div>
    </div>
  );
}
