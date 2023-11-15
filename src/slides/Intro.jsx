import nodeReactJs from "../assets/imgs/js-react-node.svg";

export const Intro = () => {
  return (
    <div className="App">
      <div style={{ marginTop: 100 + "px" }} className="flex-cont-row">
        <img src={nodeReactJs} />
        <h1>Introduction to Web Development</h1>
      </div>
      <p className="cit">Prod by Artem Frolov</p>
    </div>
  );
};
