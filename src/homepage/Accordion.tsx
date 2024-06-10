import { PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Homepage.module.css";
import * as React from "react";

type Props = {
  id: number;
  setExpanded: any;
  expanded: number;
  label: string;
  className: string;
};

export const Accordion = ({
  id,
  expanded,
  setExpanded,
  children,
  label,
  className,
}: PropsWithChildren<Props>) => {
  const isOpen = id === expanded;

  return (
    <>
      <motion.header
        id={`accordion-header-${id}`}
        initial={false}
        onClick={() => setExpanded(id)}
        className={className}
      >
        <h4 className={styles.header}> {label}</h4>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              collapsed: { height: "0%" },
              open: { height: "100%" },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
