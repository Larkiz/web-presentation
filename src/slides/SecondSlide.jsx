import { ListComponent } from "../components/ListComponent";

export const SecondSlide = () => {
  return (
    <div className="App">
      <h1>Features of Web Development</h1>
      <div className="flxcont">
        <ListComponent
          title={"Experience"}
          bgColor={"#000"}
          textColor={"#F7DF1E"}
        >
          Unique user experience
        </ListComponent>
        <ListComponent
          title={"Global access"}
          bgColor={"#000"}
          textColor={"#F7DF1E"}
        >
          Access information and services around the world
        </ListComponent>
        <ListComponent
          title={"Interactivity"}
          bgColor={"#000"}
          textColor={"#F7DF1E"}
        >
          Creation of unique and innovative projects
        </ListComponent>
      </div>
    </div>
  );
};
