import { memo, useMemo } from "react";
import styles from "./CardContainer1.module.css";

const CardContainer1 = memo(({ propMinHeight }) => {
  const frameDivStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.sampleImage}>Sample image</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.sampleImage1}>Sample image</div>
      </div>
    </div>
  );
});

export default CardContainer1;
