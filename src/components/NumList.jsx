export const NumList = ({ title, children, labelColor, bgLabelColor, num }) => {
  return (
    <>
      <div className="list-card">
        <label
          style={{ color: labelColor, backgroundColor: bgLabelColor }}
          htmlFor={num}
        >
          {num}
        </label>
        <div id={num}>
          <div className="list-title">
            <h2>{title}</h2>
            {children && <p>{children}</p>}
          </div>
        </div>
      </div>
    </>
  );
};
