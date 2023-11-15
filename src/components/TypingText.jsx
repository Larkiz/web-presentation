import { useState, useEffect } from "react";

export const TypingText = ({ children, setEnd = null }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(setText, 20, (txt) => {
      if (txt.length + 1 > children.length) {
        clearInterval(interval);

        if (setEnd)
          setTimeout(() => setEnd((prev) => [...prev, prev.length + 1]));
      }

      return children.slice(0, txt.length + 1);
    });

    return () => clearInterval(interval);
  }, [children]);

  return <div className="text">{text}</div>;
};
