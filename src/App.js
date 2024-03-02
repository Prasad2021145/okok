import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LoginSignup1 from "./pages/LoginSignup1";
import QnAQuiz1 from "./pages/QnAQuiz1";
import PollQuiz1 from "./pages/PollQuiz1";
import PollQuiz3 from "./pages/PollQuiz3";
import QnAQuiz2 from "./pages/QnAQuiz2";
import QnAQuiz3 from "./pages/QnAQuiz3";
import QuizInterface from "./pages/QuizInterface";
import QuizInterface1 from "./pages/QuizInterface1";
import PollInterface2 from "./pages/PollInterface2";
import PollInterface4 from "./pages/PollInterface4";
import QuizInterface2 from "./pages/QuizInterface2";
import QuizInterface3 from "./pages/QuizInterface3";
import QuizInterface4 from "./pages/QuizInterface4";
import Analytics from "./pages/Analytics";
import CreateQuizOnContinueTextI from "./pages/CreateQuizOnContinueTextI";
import CreateQuizOnContinueTextI1 from "./pages/CreateQuizOnContinueTextI1";
import QuizLinkSharePage1 from "./pages/QuizLinkSharePage1";
import CreateQuizOnContinueImage3 from "./pages/CreateQuizOnContinueImage3";
import CreateQuiz from "./pages/CreateQuiz";
import Analytics2 from "./pages/Analytics2";
import PollQuizImageText from "./pages/PollQuizImageText";
import QnAQuiz from "./pages/QnAQuiz";
import PollQuiz from "./pages/PollQuiz";
import PollQuiz2 from "./pages/PollQuiz2";
import PollInterface from "./pages/PollInterface";
import PollInterface1 from "./pages/PollInterface1";
import PollInterface3 from "./pages/PollInterface3";
import QuestionWisePollTypeQuesti from "./pages/QuestionWisePollTypeQuesti";
import QuestionWise from "./pages/QuestionWise";
import CreateQuizOnContinueImage from "./pages/CreateQuizOnContinueImage";
import QuizLinkSharePage from "./pages/QuizLinkSharePage";
import CreateQuizOnContinueImage1 from "./pages/CreateQuizOnContinueImage1";
import CreateQuizOnContinueImage2 from "./pages/CreateQuizOnContinueImage2";
import CreateQuizOnSelectQuizTyp from "./pages/CreateQuizOnSelectQuizTyp";
import Analytics1 from "./pages/Analytics1";
import Dashboard1 from "./pages/Dashboard1";
import Dashboard from "./pages/Dashboard";
import LoginSignupError from "./pages/LoginSignupError";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/qna-quiz":
        title = "";
        metaDescription = "";
        break;
      case "/poll-quiz":
        title = "";
        metaDescription = "";
        break;
      case "/poll-quiz1":
        title = "";
        metaDescription = "";
        break;
      case "/qna-quiz1":
        title = "";
        metaDescription = "";
        break;
      case "/qna-quiz2":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-interface":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-interface1":
        title = "";
        metaDescription = "";
        break;
      case "/poll-interface":
        title = "";
        metaDescription = "";
        break;
      case "/poll-interface1":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-interface2":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-interface3":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-interface4":
        title = "";
        metaDescription = "";
        break;
      case "/analytics":
        title = "";
        metaDescription = "";
        break;
      case "/create-quiz-on-continue-textimage-option":
        title = "";
        metaDescription = "";
        break;
      case "/create-quiz-on-continue-textimage-option1":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-link-share-page":
        title = "";
        metaDescription = "";
        break;
      case "/create-quiz-on-continue-image-option":
        title = "";
        metaDescription = "";
        break;
      case "/create-quiz":
        title = "";
        metaDescription = "";
        break;
      case "/analytics1":
        title = "";
        metaDescription = "";
        break;
      case "/poll-quiz-image-text":
        title = "";
        metaDescription = "";
        break;
      case "/qna-quiz3":
        title = "";
        metaDescription = "";
        break;
      case "/poll-quiz2":
        title = "";
        metaDescription = "";
        break;
      case "/poll-quiz3":
        title = "";
        metaDescription = "";
        break;
      case "/poll-interface2":
        title = "";
        metaDescription = "";
        break;
      case "/poll-interface3":
        title = "";
        metaDescription = "";
        break;
      case "/poll-interface4":
        title = "";
        metaDescription = "";
        break;
      case "/question-wise-poll-type-questions":
        title = "";
        metaDescription = "";
        break;
      case "/question-wise":
        title = "";
        metaDescription = "";
        break;
      case "/create-quiz-on-continue-image-option1":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-link-share-page1":
        title = "";
        metaDescription = "";
        break;
      case "/create-quiz-on-continue-image-option2":
        title = "";
        metaDescription = "";
        break;
      case "/create-quiz-on-continue-image-option3":
        title = "";
        metaDescription = "";
        break;
      case "/create-quiz-on-select-quiz-type":
        title = "";
        metaDescription = "";
        break;
      case "/analytics2":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard1":
        title = "";
        metaDescription = "";
        break;
      case "/loginsignup-error":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginSignup1 />} />
      <Route path="/qna-quiz" element={<QnAQuiz1 />} />
      <Route path="/poll-quiz" element={<PollQuiz1 />} />
      <Route path="/poll-quiz1" element={<PollQuiz3 />} />
      <Route path="/qna-quiz1" element={<QnAQuiz2 />} />
      <Route path="/qna-quiz2" element={<QnAQuiz3 />} />
      <Route path="/quiz-interface" element={<QuizInterface />} />
      <Route path="/quiz-interface1" element={<QuizInterface1 />} />
      <Route path="/poll-interface" element={<PollInterface2 />} />
      <Route path="/poll-interface1" element={<PollInterface4 />} />
      <Route path="/quiz-interface2" element={<QuizInterface2 />} />
      <Route path="/quiz-interface3" element={<QuizInterface3 />} />
      <Route path="/quiz-interface4" element={<QuizInterface4 />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route
        path="/create-quiz-on-continue-textimage-option"
        element={<CreateQuizOnContinueTextI />}
      />
      <Route
        path="/create-quiz-on-continue-textimage-option1"
        element={<CreateQuizOnContinueTextI1 />}
      />
      <Route path="/quiz-link-share-page" element={<QuizLinkSharePage1 />} />
      <Route
        path="/create-quiz-on-continue-image-option"
        element={<CreateQuizOnContinueImage3 />}
      />
      <Route path="/create-quiz" element={<CreateQuiz />} />
      <Route path="/analytics1" element={<Analytics2 />} />
      <Route path="/poll-quiz-image-text" element={<PollQuizImageText />} />
      <Route path="/qna-quiz3" element={<QnAQuiz />} />
      <Route path="/poll-quiz2" element={<PollQuiz />} />
      <Route path="/poll-quiz3" element={<PollQuiz2 />} />
      <Route path="/poll-interface2" element={<PollInterface />} />
      <Route path="/poll-interface3" element={<PollInterface1 />} />
      <Route path="/poll-interface4" element={<PollInterface3 />} />
      <Route
        path="/question-wise-poll-type-questions"
        element={<QuestionWisePollTypeQuesti />}
      />
      <Route path="/question-wise" element={<QuestionWise />} />
      <Route
        path="/create-quiz-on-continue-image-option1"
        element={<CreateQuizOnContinueImage />}
      />
      <Route path="/quiz-link-share-page1" element={<QuizLinkSharePage />} />
      <Route
        path="/create-quiz-on-continue-image-option2"
        element={<CreateQuizOnContinueImage1 />}
      />
      <Route
        path="/create-quiz-on-continue-image-option3"
        element={<CreateQuizOnContinueImage2 />}
      />
      <Route
        path="/create-quiz-on-select-quiz-type"
        element={<CreateQuizOnSelectQuizTyp />}
      />
      <Route path="/analytics2" element={<Analytics1 />} />
      <Route path="/dashboard" element={<Dashboard1 />} />
      <Route path="/dashboard1" element={<Dashboard />} />
      <Route path="/loginsignup-error" element={<LoginSignupError />} />
    </Routes>
  );
}
export default App;
