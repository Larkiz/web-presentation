import { useState } from "react";
import { useKeyboardListener } from "../../components/hooks/useKeyboardListener";
import { NumList } from "../../components/NumList";
const list = [
  { title: "Modularity" },
  { title: "High speed" },
  { title: "Cross-platform" },
  { title: "Development real-time apps" },
  { title: "Supports various protocols" },
];
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
        {list.map((item, index) => {
          return (
            <NumList
              key={index}
              num={index + 1}
              title={answerStatus.includes(index + 1) && item.title}
              bgLabelColor={"#fff"}
              labelColor={"#000"}
            />
          );
        })}
      </div>
    </div>
  );
};
