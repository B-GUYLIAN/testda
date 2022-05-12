import { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import base from "./Base.module.css";
import styles from "./Trash2.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Trash2() {
  const [text, setText] = useState<string>("");
  const [isburned, setIsburned] = useState<boolean>(false);

  // 태우기 버튼
  function burn() {
    // 앞뒤 공백제거 후 문자 없으면 alert
    if (text.trim() === "") {
      // alert("안 좋았던 기억을 입력하세요!");
      toast.error("잊고 싶은 일을 써보세요", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    } else {
      setIsburned(true);
    }
  }

  // 추가하기 버튼
  function addTrash() {
    setIsburned(false);
    setText("");
  }
  return (
    <>
      <Navbar />
      <ToastContainer />
      <BrowserView>
        <div className={base.container}>
          <div className={styles.backP}></div>
          <div className={styles.contentP}>
            <div className={styles.fireP}>
              <div className={styles.bottomP}></div>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
            </div>
            <div className={styles.reverseP}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={styles.inputP}>
            {isburned ? (
              <p>
                태우는중입니다..
                <br />
                모두 잊어버리세요!
              </p>
            ) : (
              <p>
                지우고 싶은 기억
                <br />
                여기에 놓고 가세요
              </p>
            )}
            <div className={styles.letterContainerP}>
              {isburned && (
                <div
                  id={styles.addButtonP}
                  onClick={addTrash}
                  className={isburned ? styles.showButtonP : undefined}
                >
                  추가하기
                </div>
              )}
              <textarea
                id={styles.textP}
                name="textdiary"
                value={text}
                onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>): void =>
                  setText(ev.target.value)
                }
                className={isburned ? styles.burnP : undefined}
                spellCheck="false"
              />
              <div
                id={styles.burnButtonP}
                onClick={burn}
                className={isburned ? styles.hideButtonP : undefined}
              >
                태우기
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
        </div>
      </BrowserView>

      <MobileView>
        <div className={base.container}>
          <div className={styles.back}></div>
          <div className={styles.content}>
            <div className={styles.fire}>
              <div className={styles.bottom}></div>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
            </div>
            <div className={styles.reverse}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={styles.input}>
            {isburned ? (
              <p>
                태우는중입니다..
                <br />
                모두 잊어버리세요!
              </p>
            ) : (
              <p>
                지우고 싶은 기억
                <br />
                여기에 놓고 가세요
              </p>
            )}
            <div className={styles.letterContainer}>
              {isburned && (
                <div
                  id={styles.addButton}
                  onClick={addTrash}
                  className={isburned ? styles.showButton : undefined}
                >
                  추가하기
                </div>
              )}
              <textarea
                id={styles.text}
                name="textdiary"
                value={text}
                onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>): void =>
                  setText(ev.target.value)
                }
                className={isburned ? styles.burn : undefined}
                spellCheck="false"
              />
              <div
                id={styles.burnButton}
                onClick={burn}
                className={isburned ? styles.hideButton : undefined}
              >
                태우기
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
        </div>
      </MobileView>
    </>
  );
}

export default Trash2;
