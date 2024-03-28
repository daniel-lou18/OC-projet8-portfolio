import { Outlet } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Header from "../components/Header/Header";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
      <ReactLenis root>
        <Header />
        <Outlet />
      </ReactLenis>
    </HelmetProvider>
  );
}

export default AppLayout;
