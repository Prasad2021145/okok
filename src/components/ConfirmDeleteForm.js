import { memo } from "react";
import styles from "./ConfirmDeleteForm.module.css";

const ConfirmDeleteForm = memo(() => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.confirmDelete}>Confirm Delete</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <div className={styles.cancel}>Cancel</div>
      </div>
      <div className={styles.areYouConfirm}>
        Are you confirm you want to delete ?
      </div>
    </div>
  );
});

export default ConfirmDeleteForm;
