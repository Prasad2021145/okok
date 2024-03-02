import { memo } from "react";
import styles from "./frame-component.module.css";

const FrameComponent = memo(() => {
  return (
    <div className={styles.quizzieLabelParent}>
      <div className={styles.quizzieLabel}>
        <h1 className={styles.quizzie}>QUIZZIE</h1>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.signUp}>Sign Up</div>
        </div>
        <div className={styles.logIn}>Log In</div>
      </div>
    </div>
  );
});

export default FrameComponent;
