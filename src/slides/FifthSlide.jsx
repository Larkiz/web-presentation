import jsImage from "../assets/imgs/logos.svg";

export const FifthSlide = () => {
  return (
    <div className="App">
      <h1>Frontend development</h1>

      <div className="wide-text">
        <p className="text">
          The frontend is everything that the user sees and can interact with.
          The main technologies at this stage of development are HTML, css and
          JavaScript + framework, for example most used React
        </p>
      </div>
      <img className="abs-img adapt-img-fifth" src={jsImage} alt="js" />
    </div>
  );
};
