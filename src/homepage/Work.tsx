import styles from "./Work.module.css";
import * as React from "react";
import Project from "./Project";

export default function Work() {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.workContent}>
        <Project
          link="/echo"
          header="Echo studio"
          role="Front-end developer and Design lead"
          image="/images/echo-cover.png"
          mobileImage="/images/echo-cover-mobile.png"
          tags="Fintech, B2B2B, White-label UI"
          altText="Editing software"
        />
        <Project
          link="/loupe"
          header="Loupe"
          role="React developer and Design lead"
          image="/images/loupe-cover.png"
          mobileImage="/images/loupe-cover-mobile.png"
          tags="B2C, Marketplace, E-commerce, Publication"
          altText="Loupe"
        />
        <Project
          link="/multi-transactions"
          header="Multi-transactions"
          role="UI/UX designer"
          image="/images/multi-cover.png"
          mobileImage="/images/multi-cover-mobile.png"
          tags="B2B, Fintech, Payments"
          altText="Multi-transactions"
        />
        <Project
          link="/access"
          header="Instant access"
          role="UI/UX designer"
          image="/images/access-cover.png"
          mobileImage="/images/access-cover-mobile.png"
          tags="B2B, Payments, Onboarding, Forms"
          altText="Instant access"
        />
        <Project
          link="/analogue"
          header="Analogue"
          role="UI/UX designer"
          image="/images/analogue-cover.png"
          mobileImage="/images/analogue-cover-mobile.png"
          tags="Design Systems, Components, Tokens"
          altText="Analogue"
        />
      </div>
    </div>
  );
}
