import { useState } from "react";
import { ListComponent } from "../../components/ListComponent";
import { useKeyboardListener } from "../../components/hooks/useKeyboardListener";

const list = [
  { title: "Experience", text: "Unique user experience" },
  {
    title: "Global access",
    text: "Access information and services around the world",
  },
  {
    title: "Interactivity",
    text: "Creation of unique and innovative projects",
  },
];

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
        {list.map((item, i) => {
          return (
            answerStatus.includes(i + 1) && (
              <ListComponent
                key={i}
                title={item.title}
                bgColor={"#fff"}
                textColor={"#000"}
              >
                {item.text}
              </ListComponent>
            )
          );
        })}
      </div>
    </div>
  );
};
