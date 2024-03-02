import ContainerForm from "../components/ContainerForm";
import DashboardContainer from "../components/DashboardContainer";
import PublishedQuizContainer from "../components/PublishedQuizContainer";
import styles from "./QuizLinkSharePage.module.css";

const QuizLinkSharePage = () => {
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
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img
          className={styles.mditickCircleIcon}
          alt=""
          src="/mditickcircle.svg"
        />
        <div className={styles.linkCopiedTo}>Link copied to Clipboard</div>
        <img className={styles.charmcrossIcon} alt="" src="/charmcross.svg" />
        <img className={styles.groupItem} alt="" src="/logout-text.svg" />
      </div>
    </div>
  );
};

export default QuizLinkSharePage;
