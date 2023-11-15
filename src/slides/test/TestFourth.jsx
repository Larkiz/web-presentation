import { useState } from "react";
import { useKeyboardListener } from "../../components/hooks/useKeyboardListener";
export const TestFourth = () => {
  const [answer, setAnswer] = useState(false);
  function checkAnswer() {
    setAnswer(true);
  }

  useKeyboardListener(checkAnswer);
  return (
    <div className="centered-test">
      <h1>What is node.js?</h1>
      <p className="fs-text text-test">
        {answer &&
          "Node.js is an out-of-browser JavaScript runtime that allows you to write server-side code for web pages, web applications, and command-line programs"}
      </p>
    </div>
  );
};
