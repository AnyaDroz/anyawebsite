import styles from "./LoupeVideos.module.css";

import VideoBlock from "../../common/VideoBlock";

export const PrototypeOne = () => {
  return (
    <VideoBlock
      src="/video/loupe-01.mp4"
      gridColumn="5/9"
      className={styles.prototypeOne}
      caption="(2c) Loupe prototype"
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
      caption="(5b) First prototype using Protopie"
      textColor="black"
    />
  );
};
