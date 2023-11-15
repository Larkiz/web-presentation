import { useEffect } from "react";

export const useKeyboardListener = (callback) => {
  useEffect(() => {
    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  });
};
