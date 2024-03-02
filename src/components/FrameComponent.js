import { memo, useMemo } from "react";
import styles from "./frame-component3.module.css";

const FrameComponent1 = memo(({ quiz1Width }) => {
  const frameDiv2Style = useMemo(() => {
    return {
      width: quiz1Width,
    };
  }, [quiz1Width]);

  return (
    <div className={styles.createdFrameInner} style={frameDiv2Style}>
      <div className={styles.trendingQuizsParent}>
        <h1 className={styles.trendingQuizs}>Trending Quizs</h1>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.quiz1Parent}>
                <h1 className={styles.quiz1}>Quiz 1</h1>
                <div className={styles.quizFrame}>
                  <div className={styles.createdOnFrame}>667</div>
                  <img
                    className={styles.iconParkOutlineeyes}
                    loading="eager"
                    alt=""
                    src="/iconparkoutlineeyes1.svg"
                  />
                </div>
              </div>
              <div className={styles.groupFrame}>
                <div className={styles.createdOn}>
                  Created on : 04 Sep, 2023
                </div>
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.quiz1Group}>
                <h1 className={styles.quiz11}>Quiz 1</h1>
                <div className={styles.parent}>
                  <div className={styles.div}>667</div>
                  <img
                    className={styles.iconParkOutlineeyes1}
                    loading="eager"
                    alt=""
                    src="/iconparkoutlineeyes1.svg"
                  />
                </div>
              </div>
              <div className={styles.createdOn04Sep2023Wrapper}>
                <div className={styles.createdOn1}>
                  Created on : 04 Sep, 2023
                </div>
              </div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.quiz1Container}>
                <h1 className={styles.quiz12}>Quiz 1</h1>
                <div className={styles.group}>
                  <div className={styles.div1}>667</div>
                  <img
                    className={styles.iconParkOutlineeyes2}
                    loading="eager"
                    alt=""
                    src="/iconparkoutlineeyes1.svg"
                  />
                </div>
              </div>
              <div className={styles.createdOn04Sep2023Container}>
                <div className={styles.createdOn2}>
                  Created on : 04 Sep, 2023
                </div>
              </div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.rectangleDiv} />
              <div className={styles.frameDiv}>
                <h1 className={styles.quiz13}>Quiz 1</h1>
                <div className={styles.container}>
                  <div className={styles.div2}>667</div>
                  <img
                    className={styles.iconParkOutlineeyes3}
                    loading="eager"
                    alt=""
                    src="/iconparkoutlineeyes1.svg"
                  />
                </div>
              </div>
              <div className={styles.createdOn04Sep2023Frame}>
                <div className={styles.createdOn3}>
                  Created on : 04 Sep, 2023
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild1} />
              <div className={styles.quiz1Parent1}>
                <h1 className={styles.quiz14}>Quiz 1</h1>
                <div className={styles.parent1}>
                  <div className={styles.div3}>667</div>
                  <img
                    className={styles.iconParkOutlineeyes4}
                    loading="eager"
                    alt=""
                    src="/iconparkoutlineeyes1.svg"
                  />
                </div>
              </div>
              <div className={styles.createdOn04Sep2023Wrapper1}>
                <div className={styles.createdOn4}>
                  Created on : 04 Sep, 2023
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild2} />
              <div className={styles.quiz1Parent2}>
                <h1 className={styles.quiz15}>Quiz 1</h1>
                <div className={styles.parent2}>
                  <div className={styles.div4}>667</div>
                  <img
                    className={styles.iconParkOutlineeyes5}
                    loading="eager"
                    alt=""
                    src="/iconparkoutlineeyes1.svg"
                  />
                </div>
              </div>
              <div className={styles.createdOn04Sep2023Wrapper2}>
                <div className={styles.createdOn5}>
                  Created on : 04 Sep, 2023
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild3} />
              <div className={styles.quiz1Parent3}>
                <h1 className={styles.quiz16}>Quiz 1</h1>
                <div className={styles.parent3}>
                  <div className={styles.div5}>667</div>
                  <img
                    className={styles.iconParkOutlineeyes6}
                    loading="eager"
                    alt=""
                    src="/iconparkoutlineeyes1.svg"
                  />
                </div>
              </div>
              <div className={styles.createdOn04Sep2023Wrapper3}>
                <div className={styles.createdOn6}>
                  Created on : 04 Sep, 2023
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent4}>
              <div className={styles.frameChild4} />
              <div className={styles.quiz1Parent4}>
                <h1 className={styles.quiz17}>Quiz 1</h1>
                <div className={styles.parent4}>
                  <div className={styles.div6}>667</div>
                  <img
                    className={styles.iconParkOutlineeyes7}
                    loading="eager"
                    alt=""
                    src="/iconparkoutlineeyes1.svg"
                  />
                </div>
              </div>
              <div className={styles.createdOn04Sep2023Wrapper4}>
                <div className={styles.createdOn7}>
                  Created on : 04 Sep, 2023
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent5}>
              <div className={styles.frameChild5} />
              <div className={styles.quiz1Parent5}>
                <h1 className={styles.quiz18}>Quiz 1</h1>
                <div className={styles.parent5}>
                  <div className={styles.div7}>667</div>
                  <img
                    className={styles.iconParkOutlineeyes8}
                    loading="eager"
                    alt=""
                    src="/iconparkoutlineeyes1.svg"
                  />
                </div>
              </div>
              <div className={styles.createdOn04Sep2023Wrapper5}>
                <div className={styles.createdOn8}>
                  Created on : 04 Sep, 2023
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent6}>
              <div className={styles.frameChild6} />
              <div className={styles.quiz1Parent6}>
                <h1 className={styles.quiz19}>Quiz 1</h1>
                <div className={styles.parent6}>
                  <div className={styles.div8}>667</div>
                  <img
                    className={styles.iconParkOutlineeyes9}
                    loading="eager"
                    alt=""
                    src="/iconparkoutlineeyes1.svg"
                  />
                </div>
              </div>
              <div className={styles.createdOn04Sep2023Wrapper6}>
                <div className={styles.createdOn9}>
                  Created on : 04 Sep, 2023
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent7}>
              <div className={styles.frameChild7} />
              <div className={styles.quiz1Parent7}>
                <h1 className={styles.quiz110}>Quiz 1</h1>
                <div className={styles.parent7}>
                  <div className={styles.div9}>667</div>
                  <img
                    className={styles.iconParkOutlineeyes10}
                    loading="eager"
                    alt=""
                    src="/iconparkoutlineeyes1.svg"
                  />
                </div>
              </div>
              <div className={styles.createdOn04Sep2023Wrapper7}>
                <div className={styles.createdOn10}>
                  Created on : 04 Sep, 2023
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent8}>
              <div className={styles.frameChild8} />
              <div className={styles.quiz1Parent8}>
                <h1 className={styles.quiz111}>Quiz 1</h1>
                <div className={styles.parent8}>
                  <div className={styles.div10}>667</div>
                  <img
                    className={styles.iconParkOutlineeyes11}
                    loading="eager"
                    alt=""
                    src="/iconparkoutlineeyes1.svg"
                  />
                </div>
              </div>
              <div className={styles.createdOn04Sep2023Wrapper8}>
                <div className={styles.createdOn11}>
                  Created on : 04 Sep, 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FrameComponent1;
