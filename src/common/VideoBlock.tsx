import Grid from "./Grid";
import styles from "./VideoBlock.module.css";
import clsx from "clsx";
import React from "react";

type Props = {
  src: string;
  gridColumn?: string;
  className?: string;
  caption?: string;
  textColor: string;
};
export default function VideoBlock({
  src,
  gridColumn,
  className,
  caption,
  textColor,
}: Props) {
  return (
    <Grid className={clsx(styles.container, className, textColor)}>
      <video
        autoPlay
        loop
        style={{ gridColumn: gridColumn }}
        className={styles.video}
        muted
      >
        <source src={src} type="video/mp4" />
      </video>
      <p
        className={styles.caption}
        style={{ color: textColor, gridColumn: gridColumn }}
      >
        {caption}
      </p>
    </Grid>
  );
}
