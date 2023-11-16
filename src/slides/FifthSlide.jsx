import jsImage from "../assets/imgs/logos.svg";
import { TypingText } from "../components/TypingText";

export const FifthSlide = () => {
  return (
    <div className="App">
      <h1>Frontend development</h1>

      <div className="wide-text">
        <TypingText>
          The frontend is everything that the user sees and can interact with.
          The main technologies at this stage of development are HTML, css and
          JavaScript + framework, for example most used React
        </TypingText>
      </div>
      <img className="abs-img adapt-img-fifth" src={jsImage} alt="js" />
    </div>
  );
};
