import { memo } from "react";
import styles from "./LoginSignup.module.css";

const LoginSignup = memo(() => {
  return (
    <div className={styles.loginSignup}>
      <footer className={styles.signUpFrame}>
        <section className={styles.containerFrame}>
          <div className={styles.containerFrameChild} />
          <form className={styles.fRAMEA}>
            <div className={styles.fRAMEAChild} />
            <div className={styles.innerFrame}>
              <div className={styles.quizFrame}>
                <h1 className={styles.quizzie}>QUIZZIE</h1>
              </div>
              <div className={styles.formFrame}>
                <div className={styles.signUp}>Sign Up</div>
                <button className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.logIn}>Log In</div>
                </button>
              </div>
            </div>
            <div className={styles.emailInputFrame}>
              <div className={styles.emailPasswordFrame}>
                <div className={styles.inputFrame}>
                  <input
                    className={styles.email}
                    placeholder="Email"
                    type="text"
                  />
                  <div className={styles.passwordRectangle} />
                </div>
                <div className={styles.inputFrame1}>
                  <input
                    className={styles.password}
                    placeholder="Password"
                    type="text"
                  />
                  <div className={styles.inputFrameChild} />
                </div>
              </div>
              <div className={styles.logInText}>
                <button className={styles.loginFrame}>
                  <div className={styles.loginFrameChild} />
                  <div className={styles.logIn1}>Log In</div>
                </button>
              </div>
            </div>
          </form>
        </section>
      </footer>
    </div>
  );
});

export default LoginSignup;
