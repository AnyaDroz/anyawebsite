import clsx from "clsx";
import Grid from "../../common/Grid";
import styles from "./GridTwo.module.css";
import { ReactElement } from "react";

type Props = {
  className?: string;
  mobileOne: string;
  imageOne: string;
  imageTwo: string;
  captionOne: string;
  captionTwo: string;
  mobileTwo: string;
};
export default function GridTwo({
  className,
  mobileOne,
  mobileTwo,
  imageOne,
  imageTwo,
  captionOne,
  captionTwo,
}: Props) {
  return (
    <Grid className={clsx(styles.container, className)}>
      <div className={styles.imageOne}>
        <div>
          <picture>
            <source media="(max-width: 478px)" srcSet={mobileOne} />
            <source media="(min-width: 1280px)" srcSet={imageOne} />
            <img src={imageOne} alt={captionOne} loading="lazy" />
          </picture>
        </div>
        <p>{captionOne}</p>
      </div>
      <div className={styles.imageTwo}>
        <div className={styles.imageTwo}>
          <picture>
            <source media="(max-width: 478px)" srcSet={mobileTwo} />
            <source media="(min-width: 1280px)" srcSet={imageTwo} />
            <img src={imageTwo} alt={captionOne} loading="lazy" />
          </picture>
        </div>
        <p>{captionTwo}</p>
      </div>
    </Grid>
  );
}
