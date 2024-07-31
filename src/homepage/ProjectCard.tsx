import styles from "./Home.module.css";

const ProjectCard = () => {
  return (
    <div className={styles.project}>
      <div className={styles.projectImage}></div>
      <div className={styles.projectInfo}>
        <h4 className={styles.title}>Echo Studio</h4>
        <div className={styles.projectDetails}>
          <p>Personal</p>
          <p>Case study</p>
          <p>Javascript</p>
          <p>ESep 23 - Jun 23</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
