import styles from "./AboutLinks.module.css";
import { ArrowUpRight } from "lucide-react";
import React from "react";

type Props = {
  link: string;
  name: string;
};
const AboutLink = ({ link, name }: Props) => {
  return (
    <div className={styles.link}>
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
      <ArrowUpRight size={16} strokeWidth={1} />
    </div>
  );
};

export default AboutLink;
