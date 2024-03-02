import FrameComponent from "../components/frame-component";
import styles from "./LoginSignup1.module.css";

const LoginSignup1 = () => {
  return (
    <div className={styles.loginSignup}>
      <main className={styles.loginSignupInner}>
        <footer className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <FrameComponent />
            <form className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.nameParent}>
                  <input
                    className={styles.name}
                    placeholder="Name"
                    type="text"
                  />
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.emailParent}>
                  <input
                    className={styles.email}
                    placeholder="Email"
                    type="text"
                  />
                  <div className={styles.rectangleDiv} />
                </div>
                <div className={styles.passwordParent}>
                  <input
                    className={styles.password}
                    placeholder="Password"
                    type="text"
                  />
                  <div className={styles.frameChild1} />
                </div>
                <div className={styles.confirmPasswordParent}>
                  <input
                    className={styles.confirmPassword}
                    placeholder="Confirm Password"
                    type="text"
                  />
                  <div className={styles.frameChild2} />
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <button className={styles.rectangleContainer}>
                  <div className={styles.frameChild3} />
                  <div className={styles.signUp}>Sign-Up</div>
                </button>
              </div>
            </form>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LoginSignup1;
