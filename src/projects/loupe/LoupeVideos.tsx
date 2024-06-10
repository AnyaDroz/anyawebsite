import styles from "./LoupeVideos.module.css";

import VideoBlock from "../../common/VideoBlock";

export const PrototypeOne = () => {
  return (
    <VideoBlock
      src="/video/loupe-01.mp4"
      gridColumn="5/9"
      className={styles.prototypeOne}
      caption="(Vid-01) Loupe prototype"
      textColor="white"
    />
  );
};

export const PrototypeTwo = () => {
  return (
    <VideoBlock
      src="/video/loupe-02.mp4"
      gridColumn="5/9"
      className={styles.prototypeTwo}
      caption="(Vid-02) Loupe prototype"
      textColor="black"
    />
  );
};
