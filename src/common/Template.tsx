import clsx from "clsx";
import styles from "./Template.module.css";
import { PropsWithChildren } from "react";

type Props = {
  className?: string;
};
export default function Template({
  className,
  children,
}: PropsWithChildren<Props>) {
  return <div className={clsx(styles.pageLayout, className)}>{children}</div>;
}
