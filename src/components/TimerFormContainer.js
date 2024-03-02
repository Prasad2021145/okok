import { memo, useMemo } from "react";
import styles from "./TimerFormContainer.module.css";

const TimerFormContainer = memo(
  ({
    propTop,
    propLeft,
    propBackgroundColor,
    propBoxShadow,
    propColor,
    propBoxShadow1,
    propBackgroundColor1,
    propBoxShadow2,
    propColor1,
  }) => {
    const groupDiv3Style = useMemo(() => {
      return {
        top: propTop,
        left: propLeft,
      };
    }, [propTop, propLeft]);

    const rectangleDiv4Style = useMemo(() => {
      return {
        backgroundColor: propBackgroundColor,
        boxShadow: propBoxShadow,
      };
    }, [propBackgroundColor, propBoxShadow]);

    const oFFStyle = useMemo(() => {
      return {
        color: propColor,
      };
    }, [propColor]);

    const groupDiv4Style = useMemo(() => {
      return {
        boxShadow: propBoxShadow1,
      };
    }, [propBoxShadow1]);

    const rectangleDiv5Style = useMemo(() => {
      return {
        backgroundColor: propBackgroundColor1,
        boxShadow: propBoxShadow2,
      };
    }, [propBackgroundColor1, propBoxShadow2]);

    const secStyle = useMemo(() => {
      return {
        color: propColor1,
      };
    }, [propColor1]);

    return (
      <div className={styles.timerParent} style={groupDiv3Style}>
        <div className={styles.timer}>Timer</div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} style={rectangleDiv4Style} />
          <div className={styles.off} style={oFFStyle}>
            OFF
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.sec}>5 sec</div>
        </div>
        <div className={styles.groupWrapper}>
          <div className={styles.rectangleContainer} style={groupDiv4Style}>
            <div className={styles.groupInner} style={rectangleDiv5Style} />
            <div className={styles.sec1} style={secStyle}>
              10 sec
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default TimerFormContainer;
