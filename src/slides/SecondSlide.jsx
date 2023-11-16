import { ListComponent } from "../components/ListComponent";
const list = [
  {
    title: "Experience",
    text: "Unique user experience",
  },
  {
    title: "Global access",
    text: "Access information and services around the world",
  },
  {
    title: "Interactivity",
    text: "Creation of unique and innovative projects",
  },
];
export const SecondSlide = () => {
  return (
    <div className="App">
      <h1>Features of Web Development</h1>
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
    </div>
  );
};
