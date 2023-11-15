import { useEffect, useState } from "react";
import { useKeyboardListener } from "../../components/hooks/useKeyboardListener";

export const TestThird = () => {
  const [answerStatus, setStatus] = useState([]);

  function checkAnswer(e) {
    let question = Number(e.key);
    if ([1, 2, 3, 4, 5].includes(question))
      setStatus([...answerStatus, question]);
  }

  useKeyboardListener(checkAnswer);
  return (
    <div className="centered-test">
      <h1>5 Features of node.js?</h1>
      <div className="flxcont big-list">
        <div className="list-card">
          <label className="label-test" htmlFor="1">
            1
          </label>
          <div id="1">
            <div className="list-title">
              <h2>{answerStatus.includes(1) && "Modularity"}</h2>
            </div>
          </div>
        </div>

        <div className="list-card">
          <label className="label-test" htmlFor="1">
            2
          </label>
          <div id="1">
            <div className="list-title">
              <h2>{answerStatus.includes(2) && "High speed"}</h2>
            </div>
          </div>
        </div>

        <div className="list-card">
          <label className="label-test" htmlFor="1">
            3
          </label>
          <div id="1">
            <div className="list-title">
              <h2>{answerStatus.includes(3) && "Cross-platform"}</h2>
            </div>
          </div>
        </div>

        <div className="list-card">
          <label className="label-test" htmlFor="1">
            4
          </label>
          <div id="1">
            <div className="list-title">
              <h2>
                {answerStatus.includes(4) && "Development real-time apps"}
              </h2>
            </div>
          </div>
        </div>

        <div className="list-card">
          <label className="label-test" htmlFor="1">
            5
          </label>
          <div id="1">
            <div className="list-title">
              <h2>
                {answerStatus.includes(5) && "Supports various protocols"}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
