import clsx from "clsx";
import Grid from "../../common/Grid";
import styles from "./SubHeader.module.css";

type Props = {
  className?: string;
  heading: string;
  subHeading: string;
};
export default function SubHeader({ className, heading, subHeading }: Props) {
  return (
    <Grid className={clsx(styles.container, className)}>
      <div className={styles.content}>
        <h3>{heading}</h3>
        <h4>{subHeading}</h4>
      </div>
    </Grid>
  );
}
