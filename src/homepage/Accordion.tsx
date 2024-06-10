import { PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./AccordionPage.module.css";
import * as React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  setExpanded: any;
  expanded: number;
  label: string;
  className: string;
  accordionPath: string;
};

export const Accordion = ({
  id,
  expanded,
  setExpanded,
  children,
  label,
  className,
  accordionPath,
}: PropsWithChildren<Props>) => {
  const isOpen = id === expanded;
  let navigate = useNavigate();
  const routeChange = (e: React.MouseEvent) => {
    let path = accordionPath;
    navigate(path);
    setExpanded(id);
  };
  return (
    <>
      <motion.header
        id={`accordion-header-${id}`}
        initial={false}
        onClick={routeChange}
        className={className}
      >
        <p className={styles.header}>{label}</p>
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
