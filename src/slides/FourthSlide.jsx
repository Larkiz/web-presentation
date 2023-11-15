import { ListComponent } from "../components/ListComponent";

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
          title={"Dynamic and flexible"}
          bgColor={"#000"}
          textColor={"#F7DF1E"}
        >
          Creating dynamic web pages and user interaction
        </ListComponent>
        <ListComponent
          title={"Huge community support"}
          bgColor={"#000"}
          textColor={"#F7DF1E"}
        >
          Active and friendly developer community
        </ListComponent>
      </div>
    </div>
  );
};
