import clsx from "clsx";
import styles from "./VideoBlockTwo.module.css";
import React from "react";
import Grid from "./Grid";

type Props = {
  src: string;
  placeholder: string;
  caption: string;
  color: string;
};
export const VideoBlockTwo = ({ color, src, placeholder, caption }: Props) => {
  return (
    <Grid className={styles.grid}>
      <div
        className={clsx(styles.container)}
        style={{ backgroundColor: color }}
      >
        <video controls className={styles.video} muted poster={placeholder}>
          <source src={src} type="video/mp4" />
        </video>
      </div>
      <p className={styles.caption}>{caption}</p>
    </Grid>
  );
};
