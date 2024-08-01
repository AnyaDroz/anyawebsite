import { ArrowUpRight } from "lucide-react";
import React, { CSSProperties, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import { useInView } from "framer-motion";
import clsx from "clsx";
type Props = {
  image: string;
  altText: string;
  link: string;
  name: string;
  type: string;
  tech: string;
  dates: string;
  company: string;
  hoverColor: string;
  isExternal: boolean;
};

const ProjectCard = ({
  image,
  altText,
  link,
  name,
  type,
  tech,
  dates,
  company,
  hoverColor,
  isExternal,
}: Props) => {
  const linkStyle: CSSProperties = {
    "--hover-color": hoverColor,
  } as CSSProperties;
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7 });

  console.log(isInView);
  return (
    <Link
      ref={ref}
      to={link}
      className={clsx(styles.project, { [styles.scrollBg]: isInView })}
      style={linkStyle}
      target={isExternal ? "_blank" : ""}
    >
      <picture>
        <source media="(min-width: 1280px)" srcSet={image} />
        <img src={image} alt={altText} loading="eager" />
      </picture>
      <div className={styles.projectInfo}>
        <div className={styles.projectTitle}>
          <p className={styles.title}>{name}</p>
          {isExternal && <ArrowUpRight size={16} strokeWidth={2} />}
        </div>
        <div className={styles.projectDetails}>
          <p>{type}</p>
          <p>{company}</p>
          <p>{tech}</p>
          <p>{dates}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
