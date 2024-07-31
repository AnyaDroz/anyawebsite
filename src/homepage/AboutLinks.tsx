import styles from "./AboutLinks.module.css";
import Grid from "../common/Grid";

export default function AboutLinks() {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <a href="https://medium.com/@anya." target="_blank">
          Medium
        </a>
        <a href="https://github.com/AnyaDroz" target="_blank">
          Github
        </a>
        <a href="https://www.linkedin.com/in/anya-drozdova" target="_blank">
          LinkedIn
        </a>
        <a href="https://www.linkedin.com/in/anya-drozdova" target="_blank">
          anyadrozdova.dev@gmail.com
        </a>
      </div>
    </div>
  );
}
