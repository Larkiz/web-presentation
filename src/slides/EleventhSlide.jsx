import node from "../assets/imgs/node.svg";

export const EleventhSlide = () => {
  return (
    <div className="backend-bg">
      <h1>Features of node.js</h1>
      <div className="flxcont big-list">
        <div className="list-card">
          <label htmlFor="1">1</label>
          <div id="1">
            <div className="list-title">
              <h2>Modularity</h2>
            </div>
          </div>
        </div>

        <div className="list-card">
          <label htmlFor="1">2</label>
          <div id="1">
            <div className="list-title">
              <h2>High speed</h2>
            </div>
          </div>
        </div>

        <div className="list-card">
          <label htmlFor="1">3</label>
          <div id="1">
            <div className="list-title">
              <h2>Cross-platform</h2>
            </div>
          </div>
        </div>

        <div className="list-card">
          <label htmlFor="1">4</label>
          <div id="1">
            <div className="list-title">
              <h2>Development real-time apps </h2>
            </div>
          </div>
        </div>

        <div className="list-card">
          <label htmlFor="1">5</label>
          <div id="1">
            <div className="list-title">
              <h2>Supports various protocols</h2>
            </div>
          </div>
        </div>
      </div>
      <img className="abs-img" src={node} alt="js" />
    </div>
  );
};
