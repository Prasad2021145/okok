import ContainerForm from "../components/ContainerForm";
import DashboardContainer from "../components/DashboardContainer";
import PublishedQuizContainer from "../components/PublishedQuizContainer";
import styles from "./QuizLinkSharePage1.module.css";

const QuizLinkSharePage1 = () => {
  return (
    <div className={styles.quizLinkSharePage}>
      <div className={styles.quizLinkSharePageChild} />
      <div className={styles.quizAnalysis}>Quiz Analysis</div>
      <ContainerForm />
      <div className={styles.quizLinkSharePageItem} />
      <div className={styles.quizLinkSharePageInner} />
      <DashboardContainer />
      <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
      <div className={styles.quizzie}>QUIZZIE</div>
      <div className={styles.logoutWrapper}>
        <b className={styles.logout}>Logout</b>
      </div>
      <div className={styles.rectangleDiv} />
      <PublishedQuizContainer />
    </div>
  );
};

export default QuizLinkSharePage1;
