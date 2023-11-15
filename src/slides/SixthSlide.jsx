export const SixthSlide = () => {
  return (
    <div className="App">
      <h1 style={{ marginBottom: 50 + "px" }}>
        Stages of frontend development
      </h1>

      <div className="flxcont">
        <div className="list-card">
          <label htmlFor="1">1</label>
          <div id="1">
            <div className="list-title">
              <h2>Layout</h2>

              <p>
                Development of HTML and CSS to create visual presentation of web
                pages
              </p>
            </div>
          </div>
        </div>
        <div className="list-card">
          <label htmlFor="1">2</label>
          <div id="1">
            <div className="list-title">
              <h2>Interactivity</h2>

              <p>
                Using JavaScript to create interactive elements and user
                interaction
              </p>
            </div>
          </div>
        </div>
        <div className="list-card">
          <label htmlFor="1">3</label>
          <div id="1">
            <div className="list-title">
              <h2>Testing and optimization</h2>

              <p>
                Thoroughly tested and optimized to ensure responsiveness and
                high performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
