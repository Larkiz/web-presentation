import node from "../assets/imgs/node.svg";
export const NinthSlide = () => {
  return (
    <div className="backend-bg centered-list">
      <div className="flxcont ">
        <div className="list-card">
          <label htmlFor="1">1</label>
          <div id="1">
            <div className="list-title">
              <h2>Servers and databases</h2>

              <p>
                Use of server technologies and databases for data processing and
                user interaction.
              </p>
            </div>
          </div>
        </div>
        <div className="list-card">
          <label htmlFor="1">2</label>
          <div id="1">
            <div className="list-title">
              <h2>API and external services</h2>

              <p>
                Integration with various APIs and external services to expand
                the functionality of the application.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="abs-img" src={node} alt="js" />
    </div>
  );
};
