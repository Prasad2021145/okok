import { useEffect } from "react";
import styles from "./CreateQuizOnContinueTextI.module.css";

const CreateQuizOnContinueTextI = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.createQuizOnContinueTexti}>
      <section className={styles.questionRectangle} />
      <div className={styles.frameBackground}>
        <div className={styles.dashboardFRAME}>
          <div className={styles.createQuizDashboard}>
            <div className={styles.analysisFrame}>
              <div className={styles.questionGroup}>
                <div className={styles.quizAnalysis}>
                  <div className={styles.circleEllipse}>
                    <div className={styles.createQuiz} data-animate-on-scroll>
                      Create Quiz
                    </div>
                    <div className={styles.maxQuestionsLabel}>
                      <div className={styles.optionFrame} />
                      <div className={styles.analytics}>Analytics</div>
                    </div>
                    <div className={styles.dashboard} data-animate-on-scroll>
                      Dashboard
                    </div>
                  </div>
                </div>
                <div className={styles.quizFrameset}>
                  <h1 className={styles.quizAnalysis1}>Quiz Analysis</h1>
                  <input className={styles.rectangleGroup} type="text" />
                  <input className={styles.rectangleGroup1} type="text" />
                  <div className={styles.quizFramesetInner}>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.quizFramesetChild}>
                    <div className={styles.frameItem} />
                  </div>
                  <div className={styles.groupDiv}>
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.questionWiseAnalysisParent}>
                    <div className={styles.questionWiseAnalysis}>
                      Question Wise Analysis
                    </div>
                    <div className={styles.questionWiseAnalysis1}>
                      Question Wise Analysis
                    </div>
                    <div className={styles.questionWiseAnalysis2}>
                      Question Wise Analysis
                    </div>
                    <div className={styles.questionWiseAnalysis3}>
                      Question Wise Analysis
                    </div>
                    <div className={styles.questionWiseAnalysis4}>
                      Question Wise Analysis
                    </div>
                    <div className={styles.questionWiseAnalysis5}>
                      Question Wise Analysis
                    </div>
                    <div className={styles.questionWiseAnalysis6}>
                      Question Wise Analysis
                    </div>
                    <div className={styles.sno12Container}>
                      <p className={styles.sno}>S.No</p>
                      <p className={styles.p}>1</p>
                      <p className={styles.p1}>2</p>
                      <p className={styles.p2}>3</p>
                      <p className={styles.p3}>4</p>
                      <p className={styles.p4}>5</p>
                      <p className={styles.p5}>6</p>
                      <p className={styles.p6}>7</p>
                      <p className={styles.p7}>8</p>
                    </div>
                    <div className={styles.quizNameQuizContainer}>
                      <p className={styles.quizName}>Quiz Name</p>
                      <p className={styles.quiz1}>Quiz 1</p>
                      <p className={styles.quiz2}>Quiz 2</p>
                      <p className={styles.quiz3}>Quiz 3</p>
                      <p className={styles.quiz4}>Quiz 4</p>
                      <p className={styles.quiz5}>Quiz 5</p>
                      <p className={styles.quiz6}>Quiz 6</p>
                      <p className={styles.quiz7}>Quiz 7</p>
                      <p className={styles.quiz8}>Quiz 8</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                    </div>
                    <div className={styles.createdOn01Container}>
                      <p className={styles.createdOn}>Created on</p>
                      <p className={styles.sep2023}>01 Sep, 2023</p>
                      <p className={styles.sep20231}>04 Sep, 2023</p>
                      <p className={styles.sep20232}>06 Sep, 2023</p>
                      <p className={styles.sep20233}>09 Sep, 2023</p>
                      <p className={styles.sep20234}>11 Sep, 2023</p>
                      <p className={styles.sep20235}>13 Sep, 2023</p>
                      <p className={styles.sep20236}>14 Sep, 2023</p>
                      <p className={styles.sep20237}>17 Sep, 2023</p>
                      <p className={styles.blankLine1}>&nbsp;</p>
                    </div>
                    <div className={styles.impression345667Container}>
                      <p className={styles.impression}>Impression</p>
                      <p className={styles.p8}>345</p>
                      <p className={styles.p9}>667</p>
                      <p className={styles.k}>1.6K</p>
                      <p className={styles.p10}>789</p>
                      <p className={styles.p11}>995</p>
                      <p className={styles.k1}>2.5K</p>
                      <p className={styles.p12}>231</p>
                      <p className={styles.k2}>1.3K</p>
                    </div>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.textFrame}>
                      <div className={styles.imageURLFrame}>
                        <div className={styles.quizAnalysisFrame}>
                          <div className={styles.pollGroup}>
                            <div className={styles.ellipseHolder} />
                            <div className={styles.textInputLabel}>1</div>
                          </div>
                          <div className={styles.frameParent}>
                            <div className={styles.ellipseParent}>
                              <div className={styles.ellipseDiv} />
                              <img
                                className={styles.charmcrossIcon}
                                alt=""
                                src="/charmcross1.svg"
                              />
                            </div>
                            <div className={styles.textInputField}>2</div>
                          </div>
                          <img
                            className={styles.icbaselinePlusIcon}
                            alt=""
                            src="/icbaselineplus.svg"
                          />
                        </div>
                        <div className={styles.max5Questions}>
                          Max 5 questions
                        </div>
                      </div>
                      <div className={styles.frameGroup}>
                        <div className={styles.frameContainer}>
                          <div className={styles.rectangleParent}>
                            <div className={styles.frameChild1} />
                            <div
                              className={styles.pollQuestion}
                            >{`Poll Question `}</div>
                          </div>
                          <div className={styles.frameWrapper}>
                            <div className={styles.frameDiv}>
                              <div className={styles.optionTypeWrapper}>
                                <div
                                  className={styles.optionType}
                                >{`Option Type `}</div>
                              </div>
                              <div className={styles.frameParent1}>
                                <div className={styles.frameWrapper1}>
                                  <div className={styles.frameParent2}>
                                    <img
                                      className={styles.groupIcon}
                                      alt=""
                                      src="/group-73.svg"
                                    />
                                    <div className={styles.quizOptionsFrame}>
                                      Text
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.frameWrapper2}>
                                  <div className={styles.frameParent3}>
                                    <img
                                      className={styles.frameChild2}
                                      alt=""
                                      src="/group-73.svg"
                                    />
                                    <div className={styles.imageUrl}>
                                      Image URL
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.createQuizFrame}>
                                  <div className={styles.uileditParent}>
                                    <img
                                      className={styles.uileditIcon}
                                      alt=""
                                      src="/uiledit1.svg"
                                    />
                                    <img
                                      className={styles.uileditIcon1}
                                      alt=""
                                      src="/uiledit1.svg"
                                    />
                                    <img
                                      className={styles.frameChild3}
                                      alt=""
                                      src="/group-73-2.svg"
                                    />
                                  </div>
                                  <div className={styles.questionFrame}>
                                    <div className={styles.textImageURLFrame}>
                                      <img
                                        className={
                                          styles.materialSymbolsdeleteIcon
                                        }
                                        alt=""
                                        src="/materialsymbolsdelete.svg"
                                      />
                                      <img
                                        className={
                                          styles.materialSymbolsshareIcon
                                        }
                                        alt=""
                                        src="/materialsymbolsshare.svg"
                                      />
                                      <div
                                        className={styles.textImage}
                                      >{`Text & Image URL`}</div>
                                    </div>
                                    <div
                                      className={
                                        styles.materialSymbolsdeleteParent
                                      }
                                    >
                                      <img
                                        className={
                                          styles.materialSymbolsdeleteIcon1
                                        }
                                        alt=""
                                        src="/materialsymbolsdelete.svg"
                                      />
                                      <img
                                        className={
                                          styles.materialSymbolsshareIcon1
                                        }
                                        alt=""
                                        src="/materialsymbolsshare.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.maxQuestionsFrameWrapper}>
                          <div className={styles.maxQuestionsFrame}>
                            <div className={styles.quizFrameParent}>
                              <div className={styles.quizFrame}>
                                <div
                                  className={styles.questionFrameGroupParent}
                                >
                                  <div className={styles.questionFrameGroup}>
                                    <div
                                      className={styles.imageURLGroupImageURL}
                                    >
                                      <img
                                        className={styles.uileditIcon2}
                                        alt=""
                                        src="/uiledit1.svg"
                                      />
                                      <img
                                        className={styles.uileditIcon3}
                                        alt=""
                                        src="/uiledit1.svg"
                                      />
                                      <img
                                        className={styles.uileditIcon4}
                                        alt=""
                                        src="/uiledit1.svg"
                                      />
                                      <div
                                        className={styles.rectangleContainer}
                                      >
                                        <div className={styles.frameChild4} />
                                        <div className={styles.imageUrl1}>
                                          Image URL
                                        </div>
                                      </div>
                                      <div className={styles.rectangleParent1}>
                                        <div className={styles.frameChild5} />
                                        <div className={styles.imageUrl2}>
                                          Image URL
                                        </div>
                                      </div>
                                    </div>
                                    <div className={styles.frameFrameGroup}>
                                      <img
                                        className={
                                          styles.materialSymbolsdeleteIcon2
                                        }
                                        alt=""
                                        src="/materialsymbolsdelete.svg"
                                      />
                                      <img
                                        className={
                                          styles.materialSymbolsdeleteIcon3
                                        }
                                        alt=""
                                        src="/materialsymbolsdelete.svg"
                                      />
                                      <img
                                        className={
                                          styles.materialSymbolsdeleteIcon4
                                        }
                                        alt=""
                                        src="/materialsymbolsdelete.svg"
                                      />
                                    </div>
                                    <div className={styles.frameFrameGroup1}>
                                      <img
                                        className={
                                          styles.materialSymbolsshareIcon2
                                        }
                                        alt=""
                                        src="/materialsymbolsshare.svg"
                                      />
                                      <img
                                        className={
                                          styles.materialSymbolsshareIcon3
                                        }
                                        alt=""
                                        src="/materialsymbolsshare.svg"
                                      />
                                      <img
                                        className={
                                          styles.materialSymbolsshareIcon4
                                        }
                                        alt=""
                                        src="/materialsymbolsshare.svg"
                                      />
                                    </div>
                                  </div>
                                  <div className={styles.frameQuizAnalysis}>
                                    <div className={styles.frameGroupText}>
                                      <div
                                        className={styles.optionGroupWrapper}
                                      >
                                        <div className={styles.optionGroup}>
                                          <img
                                            className={styles.optionGroupChild}
                                            alt=""
                                            src="/group-73.svg"
                                          />
                                          <img
                                            className={styles.optionGroupItem}
                                            alt=""
                                            src="/group-73.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className={styles.secondsCounter}>
                                        <div
                                          className={styles.rectangleParent2}
                                        >
                                          <div className={styles.frameChild6} />
                                          <div className={styles.secLabel}>
                                            Text
                                          </div>
                                        </div>
                                        <div
                                          className={styles.rectangleParent3}
                                        >
                                          <div className={styles.frameChild7} />
                                          <div className={styles.text}>
                                            Text
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.quizCreationFrame}>
                                  <img
                                    className={styles.quizCreationFrameChild}
                                    alt=""
                                    src="/group-101.svg"
                                  />
                                  <div className={styles.framework}>
                                    <div className={styles.imageURLText}>
                                      <div
                                        className={styles.imageURLTextChild}
                                      />
                                      <div className={styles.groupFrame}>
                                        Text
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.groupTextFrame}>
                                    <div className={styles.imageURLLabel}>
                                      <img
                                        className={styles.uileditIcon5}
                                        alt=""
                                        src="/uiledit1.svg"
                                      />
                                      <img
                                        className={styles.uileditIcon6}
                                        alt=""
                                        src="/uiledit1.svg"
                                      />
                                      <div className={styles.deleteButton}>
                                        <div
                                          className={styles.deleteButtonChild}
                                        />
                                        <div className={styles.imageUrl3}>
                                          Image URL
                                        </div>
                                      </div>
                                    </div>
                                    <div className={styles.logoutLabel}>
                                      <img
                                        className={
                                          styles.materialSymbolsdeleteIcon5
                                        }
                                        alt=""
                                        src="/materialsymbolsdelete.svg"
                                      />
                                      <img
                                        className={
                                          styles.materialSymbolsshareIcon5
                                        }
                                        alt=""
                                        src="/materialsymbolsshare.svg"
                                      />
                                      <img
                                        className={
                                          styles.materialSymbolsdeleteIcon6
                                        }
                                        alt=""
                                        src="/materialsymbolsdelete.svg"
                                      />
                                      <img
                                        className={
                                          styles.materialSymbolsshareIcon6
                                        }
                                        alt=""
                                        src="/materialsymbolsshare.svg"
                                      />
                                      <img
                                        className={
                                          styles.materialSymbolsdeleteIcon7
                                        }
                                        alt=""
                                        src="/materialsymbolsdelete1.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.timerParent}>
                                <div className={styles.timer}>Timer</div>
                                <div className={styles.frameParent4}>
                                  <div className={styles.rectangleParent4}>
                                    <div className={styles.frameChild8} />
                                    <div className={styles.off}>OFF</div>
                                  </div>
                                  <div className={styles.vectorParent}>
                                    <img
                                      className={styles.rectangleIcon}
                                      alt=""
                                      src="/rectangle-32.svg"
                                    />
                                    <div className={styles.sec}>5 sec</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.quizCreatorFrame}>
                              <div className={styles.rectangleParent5}>
                                <div className={styles.frameChild9} />
                                <div className={styles.addOption}>
                                  Add option
                                </div>
                              </div>
                              <div className={styles.secondsGroup}>
                                <div className={styles.rectangleParent6}>
                                  <div className={styles.frameChild10} />
                                  <div className={styles.sec1}>10 sec</div>
                                </div>
                                <div className={styles.frameEmpty}>
                                  <img
                                    className={styles.uileditIcon7}
                                    alt=""
                                    src="/uiledit1.svg"
                                  />
                                  <img
                                    className={
                                      styles.materialSymbolsdeleteIcon8
                                    }
                                    alt=""
                                    src="/materialsymbolsdelete.svg"
                                  />
                                  <img
                                    className={styles.materialSymbolsshareIcon7}
                                    alt=""
                                    src="/materialsymbolsshare.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.materialSymbolsdelete} />
                    <div className={styles.vectorNode}>
                      <div className={styles.logoutText}>
                        <div className={styles.rectangleParent7}>
                          <div className={styles.frameChild11} />
                          <div className={styles.cancel}>Cancel</div>
                        </div>
                        <div className={styles.rectangleParent8}>
                          <div className={styles.frameChild12} />
                          <div className={styles.createQuiz1}>Create Quiz</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.quizContainerFrame}
                alt=""
                src="/vector-1.svg"
              />
            </div>
            <div className={styles.frameLogout}>
              <b className={styles.logout}>Logout</b>
            </div>
          </div>
          <h1 className={styles.quizzie}>QUIZZIE</h1>
        </div>
      </div>
      <div className={styles.questionRectangle1} />
      <section className={styles.questionRectangle2} />
      <section className={styles.questionRectangle3} />
    </div>
  );
};

export default CreateQuizOnContinueTextI;
