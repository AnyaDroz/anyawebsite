import clsx from "clsx";
import styles from "./CodeBlock.module.css";
import { PropsWithChildren } from "react";

type Props = {
  className?: string;
};
export default function CodeBlock({
  className,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className={clsx(styles.container, className)}>
      <code>{children}</code>
    </div>
  );
}
