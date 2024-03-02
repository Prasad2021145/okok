import ContainerForm from "../components/ContainerForm";
import DashboardContainer from "../components/DashboardContainer";
import CancelContainer from "../components/CancelContainer";
import styles from "./CreateQuizOnSelectQuizTyp.module.css";

const CreateQuizOnSelectQuizTyp = () => {
  return (
    <div className={styles.createQuizOnSelectQuizTyp}>
      <div className={styles.createQuizOnSelectQuizTypChild} />
      <div className={styles.quizAnalysis}>Quiz Analysis</div>
      <ContainerForm />
      <div className={styles.createQuizOnSelectQuizTypItem} />
      <div className={styles.createQuizOnSelectQuizTypInner} />
      <DashboardContainer />
      <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
      <div className={styles.quizzie}>QUIZZIE</div>
      <div className={styles.logoutWrapper}>
        <b className={styles.logout}>Logout</b>
      </div>
      <div className={styles.rectangleDiv} />
      <CancelContainer />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.quizName}>{`Quiz name `}</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.quizType}>Quiz Type</div>
        <div className={styles.qA}>{`Q & A`}</div>
        <div className={styles.pollType}>Poll Type</div>
      </div>
    </div>
  );
};

export default CreateQuizOnSelectQuizTyp;
