import clsx from "clsx";
import Grid from "../../common/Grid";
import styles from "./GridThree.module.css";
import React, { ReactElement } from "react";

type Props = {
  className?: string;
  imageOne: string;
  imageTwo: string;
  imageThree: string;
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
      <div className={styles.imageOne}>
        <div>
          <img src={imageOne} alt={captionOne} />
        </div>
        <p>{captionOne}</p>
      </div>
      <div className={styles.imageTwo}>
        <div>
          <img src={imageTwo} alt={captionTwo} />
        </div>
        <p>{captionTwo}</p>
      </div>
      <div className={styles.imageThree}>
        <div>
          <img src={imageThree} alt={captionThree} />
        </div>
        <p>{captionThree}</p>
      </div>
    </Grid>
  );
}
