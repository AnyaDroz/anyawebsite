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
  className,
  caption,
  textColor,
}: Props) {
  return (
    <Grid className={clsx(styles.container, className, textColor)}>
      <video
        controls
        className={styles.video}
        muted
        poster="/images/echo-01.png"
      >
        <source src={src} type="video/mp4" />
      </video>
      <p className={styles.caption} style={{ color: textColor }}>
        {caption}
      </p>
    </Grid>
  );
}
