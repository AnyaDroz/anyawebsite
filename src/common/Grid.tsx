import clsx from "clsx";
import styles from "./Grid.module.css";
import { PropsWithChildren } from "react";

type Props = {
  className?: string;
};
export default function Grid({
  className,
  children,
}: PropsWithChildren<Props>) {
  return <div className={clsx(styles.container, className)}>{children}</div>;
}
