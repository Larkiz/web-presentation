import jsImage from "../assets/imgs/logos.svg";
export const SixthSlide = () => {
  return (
    <div className="App">
      <h1>Frontend development</h1>

      <div>
        <p className="ss-text">
          The frontend is everything that the user sees and can interact with.
          The main technologies at this stage of development are HTML, css and
          JavaScript + framework, for example most used React
        </p>
      </div>
      <img className="abs-img" src={jsImage} alt="js" />
    </div>
  );
};
