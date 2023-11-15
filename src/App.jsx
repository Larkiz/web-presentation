import "./App.css";

import { useEffect, useState } from "react";
import { slides } from "./components/Routes";

function App() {
  const [slide, setSlide] = useState(0);

  function nextSlide() {
    if (slide < slides.length - 1) setSlide((prev) => prev + 1);
  }

  function prevSlide() {
    if (slide !== 0) setSlide((prev) => prev - 1);
  }

  function arrowCheck(e) {
    if (e.code === "ArrowRight") return nextSlide();
    if (e.code === "ArrowLeft") return prevSlide();
  }

  useEffect(() => {
    document.addEventListener("click", nextSlide);
    document.addEventListener("keydown", arrowCheck);

    return () => {
      document.removeEventListener("keydown", arrowCheck);
      document.removeEventListener("click", nextSlide);
    };
  });

  return <>{slides[slide]}</>;
}

export default App;
