import clsx from "clsx";
import Grid from "../../common/Grid";
import styles from "./Single.module.css";
import { ReactElement } from "react";

type Props = {
  className?: string;
  image: ReactElement;
  caption: string;
  layout?: "start" | "end" | "full";
};
export default function Single({
  className,
  image,
  caption,
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
        <div className={styles.image}>{image}</div>
        <p className={styles.caption}>{caption}</p>
      </div>
    </Grid>
  );
}
