import Grid from "../../../common/Grid";
import clsx from "clsx";
import styles from "./VideoTwo.module.css";
import React from "react";

export const VideoTwo = () => {
  return (
    <Grid className={styles.grid}>
      <div className={clsx(styles.container)}>
        <video
          controls
          className={styles.video}
          muted
          poster="/images/loupe-video-02.png"
        >
          <source src="/video/loupe-02.mp4" type="video/mp4" />
        </video>
      </div>
      <p className={styles.caption}>(5b) Loupe prototype</p>
    </Grid>
  );
};
