import styles from "./CodeBlock.module.css";
import React, { PropsWithChildren } from "react";
import Grid from "./Grid";

type Props = {
  code: string;
};

export default function CodeBlock({ code }: PropsWithChildren<Props>) {
  return (
    <Grid>
      <div className={styles.container}>
        <pre className={styles.code}>{code}</pre>
      </div>
    </Grid>
  );
}
