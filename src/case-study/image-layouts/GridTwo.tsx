import clsx from "clsx";
import Grid from "../../common/Grid";
import styles from "./GridTwo.module.css";
import { ReactElement } from "react";

type Props = {
  className?: string;
  imageOne: ReactElement;
  imageTwo: ReactElement;
  captionOne: string;
  captionTwo: string;
};
export default function GridTwo({
  className,
  imageOne,
  imageTwo,
  captionOne,
  captionTwo,
}: Props) {
  return (
    <Grid className={clsx(styles.container, className)}>
      <div className={styles.imageOne}>
        <div>{imageOne}</div>
        <p>{captionOne}</p>
      </div>
      <div className={styles.imageTwo}>
        <div className={styles.imageTwo}>{imageTwo}</div>
        <p>{captionTwo}</p>
      </div>
    </Grid>
  );
}
