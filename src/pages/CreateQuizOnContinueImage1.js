import ContainerForm from "../components/ContainerForm";
import DashboardContainer from "../components/DashboardContainer";
import FormContainer1 from "../components/FormContainer1";
import styles from "./CreateQuizOnContinueImage1.module.css";

const CreateQuizOnContinueImage1 = () => {
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
      <FormContainer1
        displayText="Text"
        displayTextImageUrl="Text"
        displayTextText="Text"
        displayTextImageUrl2="Text"
        textImageUrl="/group-73-2.svg"
        imageTextUrl="/group-73.svg"
      />
    </div>
  );
};

export default CreateQuizOnContinueImage1;
