import styles from "./CodeBlock.module.css";
import React, { PropsWithChildren } from "react";
import Grid from "./Grid";
import SyntaxHighlighter from "react-syntax-highlighter";

type Props = {
  code: any;
};

export default function CodeBlock({ code }: PropsWithChildren<Props>) {
  return (
    <Grid>
      <div className={styles.container}>
        {/*<SyntaxHighlighter*/}
        {/*  language="javascript"*/}
        {/*  wrapLines={true}*/}
        {/*  lineProps={{*/}
        {/*    style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },*/}
        {/*  }}*/}
        {/*>*/}
        <pre className={styles.code}>
          {code}
          {/*</SyntaxHighlighter>*/}
        </pre>
      </div>
    </Grid>
  );
}
