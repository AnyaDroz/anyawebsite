import React, { useRef, useEffect, useState, CSSProperties } from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

type Props = {
  image: string;
  mobileImage: string;
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
  mobileImage,
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

  return (
    <Link
      to={link}
      className={styles.project}
      style={linkStyle}
      target={isExternal ? "_blank" : ""}
    >
      <picture>
        <source media="(max-width: 478px)" srcSet={mobileImage} />
        <source media="(min-width: 1280px)" srcSet={image} />
        <img src={image} alt={altText} loading="eager" />
      </picture>
      <div className={styles.projectInfo}>
        <p className={styles.title}>{name}</p>
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
