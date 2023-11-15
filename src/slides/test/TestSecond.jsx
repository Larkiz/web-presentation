import { useState } from "react";
import { useKeyboardListener } from "../../components/hooks/useKeyboardListener";

export const TestSecond = () => {
  const [answer, setAnswer] = useState(false);
  function checkAnswer() {
    setAnswer(true);
  }

  useKeyboardListener(checkAnswer);
  return (
    <div className="centered-test">
      <h1>What is developed in javascript?</h1>
      {answer && (
        <p className="fs-text text-test">
          Used for developing api servers, mobile, web and desktop applications
        </p>
      )}
    </div>
  );
};
