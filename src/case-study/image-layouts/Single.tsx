import clsx from "clsx";
import Grid from "../../common/Grid";
import styles from "./Single.module.css";
import React, { ReactElement } from "react";

type Props = {
  className?: string;
  image: string;
  caption: string;
  layout?: "start" | "end" | "full";
  mobile: string;
};
export default function Single({
  className,
  image,
  caption,
  mobile,
  layout = "start",
}: Props) {
  return (
    <Grid className={clsx(styles.container, className)}>
      <div
        className={clsx(styles.container, className, {
          [styles.start]: layout === "start",
          [styles.end]: layout === "end",
          [styles.full]: layout === "full",
        })}
      >
        <div className={styles.image}>
          <picture>
            <source media="(max-width: 478px)" srcSet={mobile} />
            <source media="(min-width: 1280px)" srcSet={image} />
            <img src={image} alt={caption} loading="lazy" />
          </picture>
        </div>
        <p className={styles.caption}>{caption}</p>
      </div>
    </Grid>
  );
}
