import Grid from "../../../common/Grid";

import styles from "./VideoSix.module.css";
import React from "react";

export const VideoSix = () => {
  return (
    <Grid className={styles.grid}>
      <video
        controls
        className={styles.video}
        muted
        poster="/images/loupe-video-06.png"
      >
        <source src="/video/loupe-06.mp4" type="video/mp4" />
      </video>
      <p className={styles.caption}>
        (7f) Custom loader design, creation and implementation
      </p>
    </Grid>
  );
};
