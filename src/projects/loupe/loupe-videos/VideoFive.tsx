import Grid from "../../../common/Grid";

import styles from "./VideoFive.module.css";
import React from "react";

export const VideoFive = () => {
  return (
    <Grid className={styles.grid}>
      <video
        controls
        className={styles.video}
        muted
        poster="/images/loupe-video-05.png"
      >
        <source src="/video/loupe-05.mp4" type="video/mp4" />
      </video>
      <p className={styles.caption}>(7e) Video overlay effect</p>
    </Grid>
  );
};
