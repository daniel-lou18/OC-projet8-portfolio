import Footer from "../components/Footer/Footer";
import MainContent from "../components/MainContent/MainContent";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Développeur front-end trilingue sur Paris, je crée des sites internet et applications web"
        ></meta>
      </Helmet>
      <MainContent />
      <Footer />
    </>
  );
}

export default Home;
