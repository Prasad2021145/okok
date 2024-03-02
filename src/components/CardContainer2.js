import { memo, useMemo } from "react";
import styles from "./CardContainer2.module.css";

const CardContainer2 = memo(({ propBorder, propBorder1 }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const rectangleDiv2Style = useMemo(() => {
    return {
      border: propBorder1,
    };
  }, [propBorder1]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent} style={groupDiv1Style}>
        <div className={styles.frameChild} style={rectangleDiv2Style} />
        <div className={styles.sampleImageRectangle}>
          <div className={styles.sampleImage}>Sample image</div>
        </div>
        <img
          className={styles.nextGroupIcon}
          loading="eager"
          alt=""
          src="/rectangle-35@2x.png"
        />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.sampleImage1}>Sample image</div>
      </div>
    </div>
  );
});

export default CardContainer2;
