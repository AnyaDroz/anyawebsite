import styles from "./Contact.module.css";
import Paragraph from "../case-study/text-layouts/Paragraph";
import clsx from "clsx";
import Grid from "../common/Grid";

export default function Contact() {
  return (
    <Grid className={clsx(styles.container)}>
      <div className={styles.contact}>
        <p>anya.drozdova89@gmail.com</p>
        <p>+44 7426728951</p>
        <p>Based in London</p>
      </div>
    </Grid>
  );
}
