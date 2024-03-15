import { Outlet } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Header from "../components/Header/Header";

function AppLayout() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="text-slate-800">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
