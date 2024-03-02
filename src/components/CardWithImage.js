import { memo, useMemo } from "react";
import styles from "./CardWithImage.module.css";

const CardWithImage = memo(({ propBorder, propPadding, propBorder1 }) => {
  const groupButtonStyle = useMemo(() => {
    return {
      border: propBorder,
      padding: propPadding,
    };
  }, [propBorder, propPadding]);

  const rectangleDivStyle = useMemo(() => {
    return {
      border: propBorder1,
    };
  }, [propBorder1]);

  return (
    <button className={styles.rectangleParent} style={groupButtonStyle}>
      <div className={styles.frameChild} style={rectangleDivStyle} />
      <div className={styles.sampleImage}>Sample image</div>
      <img
        className={styles.rectangleGroupIcon}
        alt=""
        src="/rectangle-group@2x.png"
      />
    </button>
  );
});

export default CardWithImage;
