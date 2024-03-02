import styles from "./Analytics.module.css";

const Analytics = () => {
  return (
    <div className={styles.analytics}>
      <main className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <h1 className={styles.quizzie}>QUIZZIE</h1>
          <div className={styles.analyticsLabel}>
            <div className={styles.createQuizButton}>
              <div className={styles.dashboardText}>
                <h3 className={styles.dashboard}>Dashboard</h3>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <h3 className={styles.analytics1}>Analytics</h3>
              </div>
              <h3 className={styles.createQuiz}>Create Quiz</h3>
            </div>
            <div className={styles.groupContainer}>
              <img
                className={styles.groupContainerChild}
                loading="eager"
                alt=""
                src="/vector-1.svg"
              />
              <h3 className={styles.logout}>Logout</h3>
            </div>
          </div>
        </div>
        <section className={styles.rectangleContainer}>
          <div className={styles.frameInner} />
          <header className={styles.snoLabel}>
            <div className={styles.quizNameContainer}>
              <h1 className={styles.quizAnalysis}>Quiz Analysis</h1>
              <img
                className={styles.quizNameContainerChild}
                loading="eager"
                alt=""
                src="/arrow-3.svg"
              />
            </div>
            <div className={styles.snoLabelInner}>
              <div className={styles.groupDiv}>
                <div className={styles.rectangleDiv} />
                <div className={styles.quizAnalysisIcon}>
                  <div className={styles.groupQuizMaterials}>
                    <div className={styles.deleteQuizCircle}>
                      <input className={styles.mditickCircle} type="checkbox" />
                      <input
                        className={styles.linkCopiedTo}
                        placeholder="Link copied to Clipboard"
                        type="text"
                      />
                    </div>
                    <img
                      className={styles.logoutTextIcon}
                      alt=""
                      src="/logout-text.svg"
                    />
                  </div>
                </div>
                <img
                  className={styles.charmcrossIcon}
                  loading="eager"
                  alt=""
                  src="/charmcross.svg"
                />
              </div>
            </div>
          </header>
          <div className={styles.snoFrame}>
            <div className={styles.quizNameFrame}>
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
              <div className={styles.quizGroupFrame}>
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
                <div className={styles.uileditMaterialsFrame}>
                  <div className={styles.uileditMaterialsFrameChild} />
                  <div className={styles.quizCard}>
                    <div className={styles.quizCardChild} />
                    <div className={styles.questionArea}>
                      <div className={styles.editableFrame}>
                        <img
                          className={styles.uileditIcon}
                          loading="eager"
                          alt=""
                          src="/uiledit.svg"
                        />
                        <img
                          className={styles.materialSymbolsdeleteIcon}
                          loading="eager"
                          alt=""
                          src="/materialsymbolsdelete.svg"
                        />
                        <img
                          className={styles.materialSymbolsshareIcon}
                          loading="eager"
                          alt=""
                          src="/materialsymbolsshare.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.questionWiseAnalysis}>
                      Question Wise Analysis
                    </div>
                  </div>
                  <div className={styles.rectangleParent1}>
                    <div className={styles.frameChild1} />
                    <div className={styles.frameQuestion}>
                      <div className={styles.uileditShare}>
                        <img
                          className={styles.uileditIcon1}
                          alt=""
                          src="/uiledit.svg"
                        />
                        <img
                          className={styles.materialSymbolsdeleteIcon1}
                          alt=""
                          src="/materialsymbolsdelete.svg"
                        />
                        <img
                          className={styles.materialSymbolsshareIcon1}
                          alt=""
                          src="/materialsymbolsshare.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.questionWiseAnalysisWrapper}>
                      <div className={styles.questionWiseAnalysis1}>
                        Question Wise Analysis
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent2}>
                    <div className={styles.frameChild2} />
                    <div className={styles.uileditParent}>
                      <img
                        className={styles.uileditIcon2}
                        alt=""
                        src="/uiledit.svg"
                      />
                      <img
                        className={styles.materialSymbolsdeleteIcon2}
                        alt=""
                        src="/materialsymbolsdelete.svg"
                      />
                      <img
                        className={styles.materialSymbolsshareIcon2}
                        alt=""
                        src="/materialsymbolsshare.svg"
                      />
                    </div>
                    <div className={styles.questionWiseAnalysisContainer}>
                      <div className={styles.questionWiseAnalysis2}>
                        Question Wise Analysis
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent3}>
                    <div className={styles.frameChild3} />
                    <div className={styles.uileditGroup}>
                      <img
                        className={styles.uileditIcon3}
                        alt=""
                        src="/uiledit.svg"
                      />
                      <img
                        className={styles.materialSymbolsdeleteIcon3}
                        alt=""
                        src="/materialsymbolsdelete.svg"
                      />
                      <img
                        className={styles.materialSymbolsshareIcon3}
                        alt=""
                        src="/materialsymbolsshare.svg"
                      />
                    </div>
                    <div className={styles.questionWiseAnalysis3}>
                      Question Wise Analysis
                    </div>
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
              </div>
              <div className={styles.questionStack}>
                <div className={styles.questionControlParent}>
                  <div className={styles.questionControl}>
                    <div className={styles.uileditContainer}>
                      <img
                        className={styles.uileditIcon4}
                        alt=""
                        src="/uiledit.svg"
                      />
                      <img
                        className={styles.uileditIcon5}
                        alt=""
                        src="/uiledit.svg"
                      />
                      <img
                        className={styles.uileditIcon6}
                        alt=""
                        src="/uiledit.svg"
                      />
                      <img
                        className={styles.uileditIcon7}
                        alt=""
                        src="/uiledit.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.questionGroup}>
                    <div className={styles.deleteShareButtons}>
                      <div className={styles.questionAnalysis}>
                        <div className={styles.materialSymbols}>
                          <img
                            className={styles.materialSymbolsdeleteIcon4}
                            alt=""
                            src="/materialsymbolsdelete.svg"
                          />
                          <img
                            className={styles.materialSymbolsshareIcon4}
                            alt=""
                            src="/materialsymbolsshare.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.questionWiseAnalysis4}>
                        Question Wise Analysis
                      </div>
                    </div>
                    <div className={styles.deleteShareButtons1}>
                      <div className={styles.materialSymbolsdeleteParent}>
                        <img
                          className={styles.materialSymbolsdeleteIcon5}
                          alt=""
                          src="/materialsymbolsdelete.svg"
                        />
                        <img
                          className={styles.materialSymbolsshareIcon5}
                          alt=""
                          src="/materialsymbolsshare.svg"
                        />
                      </div>
                      <div className={styles.questionWiseAnalysis5}>
                        Question Wise Analysis
                      </div>
                    </div>
                    <div className={styles.deleteShareButtons2}>
                      <div className={styles.materialSymbolsdeleteGroup}>
                        <img
                          className={styles.materialSymbolsdeleteIcon6}
                          alt=""
                          src="/materialsymbolsdelete.svg"
                        />
                        <img
                          className={styles.materialSymbolsshareIcon6}
                          alt=""
                          src="/materialsymbolsshare.svg"
                        />
                      </div>
                      <div className={styles.questionWiseAnalysis6}>
                        Question Wise Analysis
                      </div>
                    </div>
                    <div className={styles.deleteShareButtons3}>
                      <div className={styles.materialSymbolsdeleteContainer}>
                        <img
                          className={styles.materialSymbolsdeleteIcon7}
                          alt=""
                          src="/materialsymbolsdelete.svg"
                        />
                        <img
                          className={styles.materialSymbolsshareIcon7}
                          alt=""
                          src="/materialsymbolsshare.svg"
                        />
                      </div>
                      <div className={styles.questionWiseAnalysis7}>
                        Question Wise Analysis
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className={styles.createdOnIndicator} />
    </div>
  );
};

export default Analytics;
