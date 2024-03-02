import { memo } from "react";
import FrameComponent from "./frame-component";
import styles from "./password-frame.module.css";

const PasswordFrame = memo(() => {
  return (
    <div className={styles.passwordFrame}>
      <div className={styles.passwordFrameChild} />
      <FrameComponent />
      <form className={styles.passwordFrameGroup}>
        <div className={styles.signUpFrameGroup}>
          <div className={styles.signUpFrameFinal}>
            <div className={styles.invalidNameText}>
              <div className={styles.name}>Name</div>
              <div className={styles.weakPasswordFrame}>
                <div className={styles.weakPasswordFrameChild} />
                <input
                  className={styles.invalidName}
                  placeholder="Invalid name"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.invalidNameText1}>
              <div className={styles.email}>Email</div>
              <div className={styles.weakPasswordFrame1}>
                <div className={styles.weakPasswordFrameItem} />
                <input
                  className={styles.invalidEmail}
                  placeholder="Invalid Email"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={styles.passwordConfirmFrame}>
            <div className={styles.password}>Password</div>
            <div className={styles.weakPasswordFrame2}>
              <div className={styles.weakPasswordFrameInner} />
              <input
                className={styles.weakPassword}
                placeholder="Weak password"
                type="text"
              />
            </div>
          </div>
          <div className={styles.passwordConfirmFrame1}>
            <div className={styles.confirmPassword}>Confirm Password</div>
            <div className={styles.weakPasswordFrame3}>
              <div className={styles.rectangleDiv} />
              <input
                className={styles.passwordDoesntMatch}
                placeholder="password doesn’t match"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className={styles.parentFramec}>
          <button className={styles.signUpPrompt}>
            <div className={styles.signUpPromptChild} />
            <div className={styles.signUp}>Sign-Up</div>
          </button>
        </div>
      </form>
    </div>
  );
});

export default PasswordFrame;
