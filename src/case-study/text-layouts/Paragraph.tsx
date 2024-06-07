import clsx from "clsx";
import Grid from "../../common/Grid";
import styles from "./Paragraph.module.css";
import { PropsWithChildren } from "react";

type Props = {
  className?: string;
};
export default function Paragraph({
  className,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Grid className={clsx(styles.container, className)}>
      <div className={styles.content}>{children}</div>
    </Grid>
  );
}
