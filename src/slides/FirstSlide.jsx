import { TypingText } from "../components/TypingText";
import { useState } from "react";
import computer from "../assets/imgs/computer.svg";

export const FirstSlide = () => {
  const [endTyping, setEnd] = useState([]);

  return (
    <>
      <div className="App">
        <h1>What is web development</h1>

        <div className="fs-text">
          <TypingText setEnd={setEnd}>
            Web development has a wide range of tasks and opportunities -
            creating websites, web applications and online services.
          </TypingText>
        </div>

        <div className="flex-cont-row">
          <img className="rel-img" src={computer} alt="js" />
          {endTyping.length ? (
            <div className="fs-text">
              <TypingText setEnd={setEnd}>
                All these pages should be user-friendly, functional, load
                quickly, store data securely, and be suitable for any device
              </TypingText>
            </div>
          ) : (
            <div className="fs-text"></div>
          )}
        </div>
      </div>
    </>
  );
};
