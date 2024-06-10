import Grid from "../common/Grid";
import styles from "./Project.module.css";
import React from "react";

import clsx from "clsx";
import { Link } from "react-router-dom";

type Props = {
  header: string;
  mobileImage: string;
  image: string;
  altText: string;
  tags: string;
  role: string;
  link: string;
};

export default function Project({
  header,
  role,
  mobileImage,
  image,
  altText,
  tags,
  link,
}: Props) {
  return (
    <Link to={link} className={styles.projectLink}>
      <Grid className={styles.container}>
        <div className={styles.project}>
          <div className={styles.projectHeader}>
            <h2>{header}</h2>
            <p className={styles.role}>{role}</p>
          </div>
        </div>
      </Grid>
      <Grid className={clsx(styles.container)}>
        <div className={clsx(styles.content)}>
          <div className={styles.image}>
            <picture>
              <source media="(max-width: 478px)" srcSet={mobileImage} />
              <source media="(min-width: 1280px)" srcSet={image} />
              <img src={image} alt={altText} loading={eager} />
            </picture>
          </div>
          <p className={styles.caption}>{tags}</p>
        </div>
      </Grid>
    </Link>
  );
}
