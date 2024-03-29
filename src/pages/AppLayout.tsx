import { Outlet } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Header from "../components/Header/Header";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

function AppLayout() {
  useLenis(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <ReactLenis root>
      <Header />
      <Outlet />
    </ReactLenis>
  );
}

export default AppLayout;
