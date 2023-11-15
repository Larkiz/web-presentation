import { useState } from "react";
import { ListComponent } from "../../components/ListComponent";
import { useKeyboardListener } from "../../components/hooks/useKeyboardListener";

export const TestFirst = () => {
  const [answerStatus, setStatus] = useState([]);

  function checkAnswer(e) {
    let question = Number(e.key);
    if ([1, 2, 3].includes(question)) setStatus([...answerStatus, question]);
  }

  useKeyboardListener(checkAnswer);

  return (
    <div className="centered-test">
      <h1 className="title">Features of Web Development?</h1>
      <div className="flxcont">
        {answerStatus.includes(1) && (
          <ListComponent
            title={"Experience"}
            bgColor={"#fff"}
            textColor={"#000"}
          >
            Unique user experience
          </ListComponent>
        )}
        {answerStatus.includes(2) && (
          <ListComponent
            title={"Global access"}
            bgColor={"#fff"}
            textColor={"#000"}
          >
            Access information and services around the world
          </ListComponent>
        )}
        {answerStatus.includes(3) && (
          <ListComponent
            title={"Interactivity"}
            bgColor={"#fff"}
            textColor={"#000"}
          >
            Creation of unique and innovative projects
          </ListComponent>
        )}
      </div>
    </div>
  );
};
