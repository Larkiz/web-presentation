export const ListComponent = ({ title, children, textColor, bgColor }) => {
  return (
    <div
      style={{ color: textColor, backgroundColor: bgColor }}
      className="ts-cont"
    >
      <h1 className="hts">{title}</h1>
      {children && <p className="ts-text">{children}</p>}
    </div>
  );
};
