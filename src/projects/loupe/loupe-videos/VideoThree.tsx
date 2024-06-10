import Grid from "../../../common/Grid";
import clsx from "clsx";
import styles from "./VideoThree.module.css";
import React from "react";

export const VideoThree = () => {
  return (
    <Grid className={styles.grid}>
      <video
        controls
        className={styles.video}
        muted
        poster="/images/loupe-video-03.png"
      >
        <source src="/video/loupe-03.mp4" type="video/mp4" />
      </video>
      <p className={styles.caption}>(7c) Video overlay effect</p>
    </Grid>
  );
};
