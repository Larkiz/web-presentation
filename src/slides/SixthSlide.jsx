import { NumList } from "../components/NumList";

const list = [
  {
    title: "Layout",
    text: "Development of HTML and CSS to create visual presentation of web pages",
  },
  {
    title: "Interactivity",
    text: "Using JavaScript to create interactive elements and user interaction",
  },
  {
    title: "Testing and optimization",
    text: "Thoroughly tested and optimized to ensure responsiveness and high performance",
  },
];

export const SixthSlide = () => {
  return (
    <div className="App">
      <h1 style={{ marginBottom: 50 + "px" }}>
        Stages of frontend development
      </h1>

      <div className="flxcont">
        {list.map((item, i) => {
          return (
            <NumList
              num={i + 1}
              key={i}
              title={item.title}
              bgColor={"#000"}
              textColor={"#F7DF1E"}
            >
              {item.text}
            </NumList>
          );
        })}
      </div>
    </div>
  );
};
