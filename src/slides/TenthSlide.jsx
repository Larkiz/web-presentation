import node from "../assets/imgs/node.svg";
import { NumList } from "../components/NumList";

const list = [
  {
    title: "Modularity",
  },
  {
    title: "High speed",
  },
  {
    title: "Cross-platform",
  },
  {
    title: "Development real-time apps",
  },
  {
    title: "Supports various protocols",
  },
];

export const TenSlide = () => {
  return (
    <div className="backend-bg">
      <h1>Features of node.js</h1>
      <div className="flxcont big-list">
        {list.map((item, index) => {
          return (
            <NumList
              key={index}
              num={index + 1}
              title={item.title}
              bgColor={"#000"}
              textColor={"#fff"}
            />
          );
        })}
      </div>
      <img className="abs-img  abs-img-adaptv" src={node} alt="js" />
    </div>
  );
};
