import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
