import styles from "./VideoOne.module.css";
import Grid from "../../../common/Grid";
import clsx from "clsx";
import React from "react";

export const VideoOne = () => {
  return (
    <Grid className={styles.grid}>
      <div className={clsx(styles.container)}>
        <video
          controls
          className={styles.video}
          muted
          poster="/images/loupe-video-01.png"
        >
          <source src="/video/loupe-01.mp4" type="video/mp4" />
        </video>
      </div>
      <p className={styles.caption}>(2c) Loupe prototype</p>
    </Grid>
  );
};
