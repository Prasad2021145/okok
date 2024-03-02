import ContainerForm from "../components/ContainerForm";
import DashboardContainer from "../components/DashboardContainer";
import TimerFormContainer from "../components/TimerFormContainer";
import CancelBox from "../components/CancelBox";
import styles from "./CreateQuizOnContinueImage2.module.css";

const CreateQuizOnContinueImage2 = () => {
  return (
    <div className={styles.createQuizOnContinueImage}>
      <div className={styles.createQuizOnContinueImageChild} />
      <div className={styles.quizAnalysis}>Quiz Analysis</div>
      <ContainerForm />
      <div className={styles.createQuizOnContinueImageItem} />
      <div className={styles.createQuizOnContinueImageInner} />
      <DashboardContainer />
      <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
      <div className={styles.quizzie}>QUIZZIE</div>
      <div className={styles.logoutWrapper}>
        <b className={styles.logout}>Logout</b>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <TimerFormContainer
          propTop="365px"
          propLeft="647px"
          propBackgroundColor="#d60000"
          propBoxShadow="unset"
          propColor="#fff"
          propBoxShadow1="unset"
          propBackgroundColor1="#fff"
          propBoxShadow2="0px 0px 15px rgba(0, 0, 0, 0.15)"
          propColor1="#9f9f9f"
        />
        <CancelBox />
        <div className={styles.groupParent}>
          <img className={styles.groupItem} alt="" src="/group-73.svg" />
          <img className={styles.groupInner} alt="" src="/group-101.svg" />
          <img className={styles.groupIcon} alt="" src="/group-73.svg" />
        </div>
      </div>
    </div>
  );
};

export default CreateQuizOnContinueImage2;
