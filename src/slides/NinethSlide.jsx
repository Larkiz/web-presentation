import node from "../assets/imgs/node.svg";
import { TypingText } from "../components/TypingText";
export const NinethSLide = () => {
  return (
    <div className="backend-bg">
      <h1>Node.js</h1>
      <div className="wide-text">
        <TypingText>
          Node.js is an out-of-browser JavaScript runtime that allows you to
          write server-side code for web pages and web applications, as well as
          command-line programs. Node.js is not a separate programming language,
          but a platform for using JavaScript on the server side.
        </TypingText>
      </div>
      <img className="abs-img" src={node} alt="js" />
    </div>
  );
};
