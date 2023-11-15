import { ListComponent } from "../components/ListComponent";
import jsImage from "../assets/imgs/image_js.svg";
export const FourthSlide = () => {
  return (
    <div className="App">
      <h1>Features of JavaScript</h1>
      <div className="flxcont">
        <ListComponent
          title={"Dynamic and flexible"}
          bgColor={"#000"}
          textColor={"#F7DF1E"}
        >
          Creating dynamic web pages and user interaction
        </ListComponent>
        <ListComponent
          title={"Browser compatibility"}
          bgColor={"#000"}
          textColor={"#F7DF1E"}
        >
          Supports all browsers and creates cross-platform applications
        </ListComponent>
        <ListComponent
          title={"Huge community support"}
          bgColor={"#000"}
          textColor={"#F7DF1E"}
        >
          Active and friendly developer community
        </ListComponent>
      </div>
      <img className="abs-img" src={jsImage} alt="js" />
    </div>
  );
};
