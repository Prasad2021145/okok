import PasswordFrame from "../components/password-frame";
import styles from "./LoginSignupError.module.css";

const LoginSignupError = () => {
  return (
    <div className={styles.loginSignupError}>
      <footer className={styles.mainFrame}>
        <section className={styles.signUpFrame}>
          <div className={styles.signUpFrameChild} />
          <PasswordFrame />
        </section>
      </footer>
    </div>
  );
};

export default LoginSignupError;
