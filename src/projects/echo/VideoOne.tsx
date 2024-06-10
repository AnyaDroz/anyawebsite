import styles from "./VideoOne.module.css";
import React from "react";
import Grid from "../../common/Grid";

export const VideoOne = () => {
  return (
    <Grid className={styles.grid}>
      <video
        controls
        className={styles.video}
        muted
        poster="/images/echo-video-01.png"
      >
        <source src="/video/echo-01.mp4" type="video/mp4" />
      </video>
      <p className={styles.caption}>(6c) Storybook implementation</p>
    </Grid>
  );
};
