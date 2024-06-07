import clsx from "clsx";
import Grid from "../../common/Grid";
import styles from "./Header.module.css";

type Props = {
  className?: string;
  heading: string;
  subHeading: string;
  role: string;
  tags: string;
};
export default function Header({
  className,
  heading,
  subHeading,
  role,
  tags,
}: Props) {
  return (
    <Grid className={clsx(styles.container, className)}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1>{heading}</h1>
          <h2>{subHeading}</h2>
        </div>
        <p className={styles.role}>{role}</p>
      </div>
      <p className={styles.tags}>{tags}</p>
    </Grid>
  );
}
