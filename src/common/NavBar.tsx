import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className={styles.navBar}>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
