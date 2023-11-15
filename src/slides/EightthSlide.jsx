import node from "../assets/imgs/node.svg";
import { TypingText } from "../components/TypingText";
export const EightthSlide = () => {
  return (
    <div className="backend-bg">
      <h1>Backend development</h1>
      <div className="fs-text">
        <TypingText>
          Backend is the server part of the application. That is, backend
          developers deal with databases, architecture, program logic, with
          everything that the average user does not see. The backend developer
          provides everything related to the external content of the system.
        </TypingText>
      </div>
      <img className="abs-img" src={node} alt="js" />
    </div>
  );
};
