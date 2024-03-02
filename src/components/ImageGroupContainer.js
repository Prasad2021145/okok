import { memo } from "react";
import styles from "./ImageGroupContainer.module.css";

const ImageGroupContainer = memo(() => {
  return (
    <div className={styles.imageGroup}>
      <img
        className={styles.imageGroupChild}
        loading="eager"
        alt=""
        src="/group-106@2x.png"
      />
      <button className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.sampleImage}>Sample image</div>
      </button>
      <button className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.sampleImage1}>Sample image</div>
      </button>
      <button className={styles.rectangleContainer}>
        <div className={styles.frameInner} />
        <div className={styles.sampleImage2}>Sample image</div>
      </button>
    </div>
  );
});

export default ImageGroupContainer;
