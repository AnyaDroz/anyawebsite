import Grid from "../../../common/Grid";

import styles from "./VideoFour.module.css";
import React from "react";

export const VideoFour = () => {
  return (
    <Grid className={styles.grid}>
      <video
        controls
        className={styles.video}
        muted
        poster="/images/loupe-video-04.png"
      >
        <source src="/video/loupe-05.mp4" type="video/mp4" />
      </video>
      <p className={styles.caption}>(7d) Video overlay effect</p>
    </Grid>
  );
};
