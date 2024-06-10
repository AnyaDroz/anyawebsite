import styles from "./AboutLinks.module.css";
import Grid from "../common/Grid";

export default function AboutLinks() {
  return (
    <Grid className={styles.container}>
      <div className={styles.links}>
        <a href={"https://medium.com/@anya."}>Medium</a>
        <a href={"https://github.com/AnyaDroz"}>Github</a>
        <a href={"www.linkedin.com/in/anya-drozdova"}>LinkedIn</a>
      </div>
    </Grid>
  );
}
