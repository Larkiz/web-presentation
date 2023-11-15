import { TypingText } from "../components/TypingText";
import jsImage from "../assets/imgs/image_js.svg";

export const ThirdSlide = () => {
  return (
    <div className="App">
      <h1>JavaScript</h1>
      <div className="fs-text" style={{ width: 973 + "px" }}>
        <TypingText>
          JavaScript is a programming language for developing interfaces and web
          applications. Used for developing api servers, mobile, web and desktop
          applications.
        </TypingText>
      </div>
      <img className="abs-img" src={jsImage} alt="js" />
    </div>
  );
};
