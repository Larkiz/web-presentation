import { ListComponent } from "../components/ListComponent";
import jsImage from "../assets/imgs/image_js.svg";

const list = [
  {
    title: "Dynamic and flexible",
    text: "Creating dynamic web pages and user interaction",
  },
  {
    title: "Browser compatibility",
    text: "Supports all browsers and creates cross-platform applications",
  },
  {
    title: "Huge community support",
    text: "Active and friendly developer community",
  },
];

export const FourthSlide = () => {
  return (
    <div className="App">
      <h1>Features of JavaScript</h1>
      <div className="flxcont">
        {list.map((item, i) => {
          return (
            <ListComponent
              key={i}
              title={item.title}
              bgColor={"#000"}
              textColor={"#F7DF1E"}
            >
              {item.text}
            </ListComponent>
          );
        })}
      </div>
      {window.innerWidth >= 1200 && (
        <img className="abs-img abs-img-adaptv " src={jsImage} alt="js" />
      )}
    </div>
  );
};
