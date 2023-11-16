import node from "../assets/imgs/node.svg";
import { NumList } from "../components/NumList";

const list = [
  {
    title: "Servers and databases",
    text: "Use of server technologies and databases for data processing and user interaction",
  },
  {
    title: "API and external services",
    text: "Integration with various APIs and external services to expand the functionality of the application",
  },
];

export const EightSlide = () => {
  return (
    <div className="backend-bg centered-list to-top">
      <div className="flxcont ">
        {list.map((item, index) => {
          return (
            <NumList
              key={index}
              num={index + 1}
              title={item.title}
              bgColor={"#000"}
              textColor={"#fff"}
            >
              {item.text}
            </NumList>
          );
        })}
      </div>
      <img className="abs-img abs-img-adaptv" src={node} alt="js" />
    </div>
  );
};
