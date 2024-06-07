import clsx from "clsx";
import Grid from "../../common/Grid";
import styles from "./GridThree.module.css";
import { ReactElement } from "react";

type Props = {
  className?: string;
  imageOne: ReactElement;
  imageTwo: ReactElement;
  imageThree: ReactElement;
  captionOne: string;
  captionTwo: string;
  captionThree: string;
};
export default function GridThree({
  className,
  imageOne,
  imageTwo,
  imageThree,
  captionOne,
  captionTwo,
  captionThree,
}: Props) {
  return (
    <Grid className={clsx(styles.container, className)}>
      <div className={styles.imageOne}>{imageOne}</div>
      <p className={styles.captionOne}>{captionOne}</p>
      <div className={styles.imageTwo}>{imageTwo}</div>
      <div className={styles.imageThree}>{imageThree}</div>
    </Grid>
  );
}
