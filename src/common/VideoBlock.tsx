import Grid from "./Grid";
import styles from "./VideoBlock.module.css";

import React from "react";

type Props = {
  src: string;
  placeholder: string;
  caption: string;
};
export const VideoBlock = ({ placeholder, src, caption }: Props) => {
  return (
    <Grid className={styles.grid}>
      <video controls className={styles.video} muted poster={placeholder}>
        <source src={src} type="video/mp4" />
      </video>
      <p className={styles.caption}>{caption}</p>
    </Grid>
  );
};
